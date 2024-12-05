# `dataOciCapacityManagementOccCapacityRequests` Submodule <a name="`dataOciCapacityManagementOccCapacityRequests` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCapacityManagementOccCapacityRequests <a name="DataOciCapacityManagementOccCapacityRequests" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_capacity_requests oci_capacity_management_occ_capacity_requests}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicapacitymanagementocccapacityrequests"

dataocicapacitymanagementocccapacityrequests.NewDataOciCapacityManagementOccCapacityRequests(scope Construct, id *string, config DataOciCapacityManagementOccCapacityRequestsConfig) DataOciCapacityManagementOccCapacityRequests
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig">DataOciCapacityManagementOccCapacityRequestsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig">DataOciCapacityManagementOccCapacityRequestsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.resetOccAvailabilityCatalogId">ResetOccAvailabilityCatalogId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.resetRequestType">ResetRequestType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.resetId"></a>

```go
func ResetId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetOccAvailabilityCatalogId` <a name="ResetOccAvailabilityCatalogId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.resetOccAvailabilityCatalogId"></a>

```go
func ResetOccAvailabilityCatalogId()
```

##### `ResetRequestType` <a name="ResetRequestType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.resetRequestType"></a>

```go
func ResetRequestType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCapacityManagementOccCapacityRequests resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicapacitymanagementocccapacityrequests"

dataocicapacitymanagementocccapacityrequests.DataOciCapacityManagementOccCapacityRequests_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicapacitymanagementocccapacityrequests"

dataocicapacitymanagementocccapacityrequests.DataOciCapacityManagementOccCapacityRequests_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicapacitymanagementocccapacityrequests"

dataocicapacitymanagementocccapacityrequests.DataOciCapacityManagementOccCapacityRequests_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicapacitymanagementocccapacityrequests"

dataocicapacitymanagementocccapacityrequests.DataOciCapacityManagementOccCapacityRequests_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciCapacityManagementOccCapacityRequests resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciCapacityManagementOccCapacityRequests to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciCapacityManagementOccCapacityRequests that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_capacity_requests#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCapacityManagementOccCapacityRequests to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList">DataOciCapacityManagementOccCapacityRequestsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.occCapacityRequestCollection">OccCapacityRequestCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList">DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.occAvailabilityCatalogIdInput">OccAvailabilityCatalogIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.requestTypeInput">RequestTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.occAvailabilityCatalogId">OccAvailabilityCatalogId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.requestType">RequestType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.filter"></a>

```go
func Filter() DataOciCapacityManagementOccCapacityRequestsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList">DataOciCapacityManagementOccCapacityRequestsFilterList</a>

---

##### `OccCapacityRequestCollection`<sup>Required</sup> <a name="OccCapacityRequestCollection" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.occCapacityRequestCollection"></a>

```go
func OccCapacityRequestCollection() DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList">DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `OccAvailabilityCatalogIdInput`<sup>Optional</sup> <a name="OccAvailabilityCatalogIdInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.occAvailabilityCatalogIdInput"></a>

```go
func OccAvailabilityCatalogIdInput() *string
```

- *Type:* *string

---

##### `RequestTypeInput`<sup>Optional</sup> <a name="RequestTypeInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.requestTypeInput"></a>

```go
func RequestTypeInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `OccAvailabilityCatalogId`<sup>Required</sup> <a name="OccAvailabilityCatalogId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.occAvailabilityCatalogId"></a>

```go
func OccAvailabilityCatalogId() *string
```

- *Type:* *string

---

##### `RequestType`<sup>Required</sup> <a name="RequestType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.requestType"></a>

```go
func RequestType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCapacityManagementOccCapacityRequestsConfig <a name="DataOciCapacityManagementOccCapacityRequestsConfig" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicapacitymanagementocccapacityrequests"

&dataocicapacitymanagementocccapacityrequests.DataOciCapacityManagementOccCapacityRequestsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	DisplayName: *string,
	Filter: interface{},
	Id: *string,
	Namespace: *string,
	OccAvailabilityCatalogId: *string,
	RequestType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_capacity_requests#compartment_id DataOciCapacityManagementOccCapacityRequests#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_capacity_requests#display_name DataOciCapacityManagementOccCapacityRequests#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_capacity_requests#id DataOciCapacityManagementOccCapacityRequests#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_capacity_requests#namespace DataOciCapacityManagementOccCapacityRequests#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.property.occAvailabilityCatalogId">OccAvailabilityCatalogId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_capacity_requests#occ_availability_catalog_id DataOciCapacityManagementOccCapacityRequests#occ_availability_catalog_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.property.requestType">RequestType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_capacity_requests#request_type DataOciCapacityManagementOccCapacityRequests#request_type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_capacity_requests#compartment_id DataOciCapacityManagementOccCapacityRequests#compartment_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_capacity_requests#display_name DataOciCapacityManagementOccCapacityRequests#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_capacity_requests#filter DataOciCapacityManagementOccCapacityRequests#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_capacity_requests#id DataOciCapacityManagementOccCapacityRequests#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_capacity_requests#namespace DataOciCapacityManagementOccCapacityRequests#namespace}.

---

##### `OccAvailabilityCatalogId`<sup>Optional</sup> <a name="OccAvailabilityCatalogId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.property.occAvailabilityCatalogId"></a>

```go
OccAvailabilityCatalogId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_capacity_requests#occ_availability_catalog_id DataOciCapacityManagementOccCapacityRequests#occ_availability_catalog_id}.

---

##### `RequestType`<sup>Optional</sup> <a name="RequestType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.property.requestType"></a>

```go
RequestType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_capacity_requests#request_type DataOciCapacityManagementOccCapacityRequests#request_type}.

---

### DataOciCapacityManagementOccCapacityRequestsFilter <a name="DataOciCapacityManagementOccCapacityRequestsFilter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicapacitymanagementocccapacityrequests"

&dataocicapacitymanagementocccapacityrequests.DataOciCapacityManagementOccCapacityRequestsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_capacity_requests#name DataOciCapacityManagementOccCapacityRequests#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_capacity_requests#values DataOciCapacityManagementOccCapacityRequests#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_capacity_requests#regex DataOciCapacityManagementOccCapacityRequests#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_capacity_requests#name DataOciCapacityManagementOccCapacityRequests#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_capacity_requests#values DataOciCapacityManagementOccCapacityRequests#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_capacity_requests#regex DataOciCapacityManagementOccCapacityRequests#regex}.

---

### DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollection <a name="DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollection" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicapacitymanagementocccapacityrequests"

&dataocicapacitymanagementocccapacityrequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollection {

}
```


### DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItems <a name="DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicapacitymanagementocccapacityrequests"

&dataocicapacitymanagementocccapacityrequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItems {

}
```


### DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetails <a name="DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetails" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicapacitymanagementocccapacityrequests"

&dataocicapacitymanagementocccapacityrequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetails {

}
```


### DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStruct <a name="DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStruct" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStruct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStruct.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicapacitymanagementocccapacityrequests"

&dataocicapacitymanagementocccapacityrequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStruct {

}
```


### DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperations <a name="DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperations" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperations.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicapacitymanagementocccapacityrequests"

&dataocicapacitymanagementocccapacityrequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperations {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCapacityManagementOccCapacityRequestsFilterList <a name="DataOciCapacityManagementOccCapacityRequestsFilterList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicapacitymanagementocccapacityrequests"

dataocicapacitymanagementocccapacityrequests.NewDataOciCapacityManagementOccCapacityRequestsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCapacityManagementOccCapacityRequestsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList.get"></a>

```go
func Get(index *f64) DataOciCapacityManagementOccCapacityRequestsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciCapacityManagementOccCapacityRequestsFilterOutputReference <a name="DataOciCapacityManagementOccCapacityRequestsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicapacitymanagementocccapacityrequests"

dataocicapacitymanagementocccapacityrequests.NewDataOciCapacityManagementOccCapacityRequestsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCapacityManagementOccCapacityRequestsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList <a name="DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicapacitymanagementocccapacityrequests"

dataocicapacitymanagementocccapacityrequests.NewDataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList.get"></a>

```go
func Get(index *f64) DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference <a name="DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicapacitymanagementocccapacityrequests"

dataocicapacitymanagementocccapacityrequests.NewDataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.handoverQuantity">HandoverQuantity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.occHandoverResourceBlockId">OccHandoverResourceBlockId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStruct">DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HandoverQuantity`<sup>Required</sup> <a name="HandoverQuantity" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.handoverQuantity"></a>

```go
func HandoverQuantity() *string
```

- *Type:* *string

---

##### `OccHandoverResourceBlockId`<sup>Required</sup> <a name="OccHandoverResourceBlockId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.occHandoverResourceBlockId"></a>

```go
func OccHandoverResourceBlockId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStruct
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStruct">DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStruct</a>

---


### DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList <a name="DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicapacitymanagementocccapacityrequests"

dataocicapacitymanagementocccapacityrequests.NewDataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList.get"></a>

```go
func Get(index *f64) DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference <a name="DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicapacitymanagementocccapacityrequests"

dataocicapacitymanagementocccapacityrequests.NewDataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.property.actualHandoverQuantity">ActualHandoverQuantity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.property.associatedOccHandoverResourceBlockList">AssociatedOccHandoverResourceBlockList</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList">DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.property.dateActualHandover">DateActualHandover</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.property.dateExpectedHandover">DateExpectedHandover</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.property.demandQuantity">DemandQuantity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.property.expectedHandoverQuantity">ExpectedHandoverQuantity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.property.resourceName">ResourceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.property.sourceWorkloadType">SourceWorkloadType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.property.workloadType">WorkloadType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetails">DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActualHandoverQuantity`<sup>Required</sup> <a name="ActualHandoverQuantity" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.property.actualHandoverQuantity"></a>

```go
func ActualHandoverQuantity() *string
```

- *Type:* *string

---

##### `AssociatedOccHandoverResourceBlockList`<sup>Required</sup> <a name="AssociatedOccHandoverResourceBlockList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.property.associatedOccHandoverResourceBlockList"></a>

```go
func AssociatedOccHandoverResourceBlockList() DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList">DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList</a>

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.property.availabilityDomain"></a>

```go
func AvailabilityDomain() *string
```

- *Type:* *string

---

##### `DateActualHandover`<sup>Required</sup> <a name="DateActualHandover" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.property.dateActualHandover"></a>

```go
func DateActualHandover() *string
```

- *Type:* *string

---

##### `DateExpectedHandover`<sup>Required</sup> <a name="DateExpectedHandover" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.property.dateExpectedHandover"></a>

```go
func DateExpectedHandover() *string
```

- *Type:* *string

---

##### `DemandQuantity`<sup>Required</sup> <a name="DemandQuantity" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.property.demandQuantity"></a>

```go
func DemandQuantity() *string
```

- *Type:* *string

---

##### `ExpectedHandoverQuantity`<sup>Required</sup> <a name="ExpectedHandoverQuantity" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.property.expectedHandoverQuantity"></a>

```go
func ExpectedHandoverQuantity() *string
```

- *Type:* *string

---

##### `ResourceName`<sup>Required</sup> <a name="ResourceName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.property.resourceName"></a>

```go
func ResourceName() *string
```

- *Type:* *string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `SourceWorkloadType`<sup>Required</sup> <a name="SourceWorkloadType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.property.sourceWorkloadType"></a>

```go
func SourceWorkloadType() *string
```

- *Type:* *string

---

##### `WorkloadType`<sup>Required</sup> <a name="WorkloadType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.property.workloadType"></a>

```go
func WorkloadType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetails">DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetails</a>

---


### DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList <a name="DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicapacitymanagementocccapacityrequests"

dataocicapacitymanagementocccapacityrequests.NewDataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference <a name="DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicapacitymanagementocccapacityrequests"

dataocicapacitymanagementocccapacityrequests.NewDataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.dateExpectedCapacityHandover">DateExpectedCapacityHandover</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.details">Details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList">DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.occAvailabilityCatalogId">OccAvailabilityCatalogId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.occCustomerGroupId">OccCustomerGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.patchOperations">PatchOperations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList">DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.requestState">RequestState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.requestType">RequestType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItems">DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.availabilityDomain"></a>

```go
func AvailabilityDomain() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DateExpectedCapacityHandover`<sup>Required</sup> <a name="DateExpectedCapacityHandover" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.dateExpectedCapacityHandover"></a>

```go
func DateExpectedCapacityHandover() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Details`<sup>Required</sup> <a name="Details" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.details"></a>

```go
func Details() DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList">DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList</a>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `OccAvailabilityCatalogId`<sup>Required</sup> <a name="OccAvailabilityCatalogId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.occAvailabilityCatalogId"></a>

```go
func OccAvailabilityCatalogId() *string
```

- *Type:* *string

---

##### `OccCustomerGroupId`<sup>Required</sup> <a name="OccCustomerGroupId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.occCustomerGroupId"></a>

```go
func OccCustomerGroupId() *string
```

- *Type:* *string

---

##### `PatchOperations`<sup>Required</sup> <a name="PatchOperations" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.patchOperations"></a>

```go
func PatchOperations() DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList">DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList</a>

---

##### `Region`<sup>Required</sup> <a name="Region" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `RequestState`<sup>Required</sup> <a name="RequestState" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.requestState"></a>

```go
func RequestState() *string
```

- *Type:* *string

---

##### `RequestType`<sup>Required</sup> <a name="RequestType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.requestType"></a>

```go
func RequestType() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItems">DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItems</a>

---


### DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList <a name="DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicapacitymanagementocccapacityrequests"

dataocicapacitymanagementocccapacityrequests.NewDataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList.get"></a>

```go
func Get(index *f64) DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference <a name="DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicapacitymanagementocccapacityrequests"

dataocicapacitymanagementocccapacityrequests.NewDataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.property.from">From</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.property.operation">Operation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.property.position">Position</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.property.selectedItem">SelectedItem</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.property.selection">Selection</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.property.value">Value</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperations">DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `From`<sup>Required</sup> <a name="From" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.property.from"></a>

```go
func From() *string
```

- *Type:* *string

---

##### `Operation`<sup>Required</sup> <a name="Operation" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.property.operation"></a>

```go
func Operation() *string
```

- *Type:* *string

---

##### `Position`<sup>Required</sup> <a name="Position" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.property.position"></a>

```go
func Position() *string
```

- *Type:* *string

---

##### `SelectedItem`<sup>Required</sup> <a name="SelectedItem" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.property.selectedItem"></a>

```go
func SelectedItem() *string
```

- *Type:* *string

---

##### `Selection`<sup>Required</sup> <a name="Selection" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.property.selection"></a>

```go
func Selection() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.property.value"></a>

```go
func Value() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperations
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperations">DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperations</a>

---


### DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList <a name="DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicapacitymanagementocccapacityrequests"

dataocicapacitymanagementocccapacityrequests.NewDataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList.get"></a>

```go
func Get(index *f64) DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference <a name="DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicapacitymanagementocccapacityrequests"

dataocicapacitymanagementocccapacityrequests.NewDataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList">DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollection">DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.property.items"></a>

```go
func Items() DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList">DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollection">DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollection</a>

---



