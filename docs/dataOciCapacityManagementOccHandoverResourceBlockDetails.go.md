# `dataOciCapacityManagementOccHandoverResourceBlockDetails` Submodule <a name="`dataOciCapacityManagementOccHandoverResourceBlockDetails` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCapacityManagementOccHandoverResourceBlockDetails <a name="DataOciCapacityManagementOccHandoverResourceBlockDetails" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_handover_resource_block_details oci_capacity_management_occ_handover_resource_block_details}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicapacitymanagementocchandoverresourceblockdetails"

dataocicapacitymanagementocchandoverresourceblockdetails.NewDataOciCapacityManagementOccHandoverResourceBlockDetails(scope Construct, id *string, config DataOciCapacityManagementOccHandoverResourceBlockDetailsConfig) DataOciCapacityManagementOccHandoverResourceBlockDetails
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsConfig">DataOciCapacityManagementOccHandoverResourceBlockDetailsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsConfig">DataOciCapacityManagementOccHandoverResourceBlockDetailsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.resetHostId">ResetHostId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetHostId` <a name="ResetHostId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.resetHostId"></a>

```go
func ResetHostId()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCapacityManagementOccHandoverResourceBlockDetails resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicapacitymanagementocchandoverresourceblockdetails"

dataocicapacitymanagementocchandoverresourceblockdetails.DataOciCapacityManagementOccHandoverResourceBlockDetails_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicapacitymanagementocchandoverresourceblockdetails"

dataocicapacitymanagementocchandoverresourceblockdetails.DataOciCapacityManagementOccHandoverResourceBlockDetails_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicapacitymanagementocchandoverresourceblockdetails"

dataocicapacitymanagementocchandoverresourceblockdetails.DataOciCapacityManagementOccHandoverResourceBlockDetails_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicapacitymanagementocchandoverresourceblockdetails"

dataocicapacitymanagementocchandoverresourceblockdetails.DataOciCapacityManagementOccHandoverResourceBlockDetails_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciCapacityManagementOccHandoverResourceBlockDetails resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciCapacityManagementOccHandoverResourceBlockDetails to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciCapacityManagementOccHandoverResourceBlockDetails that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_handover_resource_block_details#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCapacityManagementOccHandoverResourceBlockDetails to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterList">DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.occHandoverResourceBlockDetailCollection">OccHandoverResourceBlockDetailCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList">DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.hostIdInput">HostIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.occHandoverResourceBlockIdInput">OccHandoverResourceBlockIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.hostId">HostId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.occHandoverResourceBlockId">OccHandoverResourceBlockId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.filter"></a>

```go
func Filter() DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterList">DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterList</a>

---

##### `OccHandoverResourceBlockDetailCollection`<sup>Required</sup> <a name="OccHandoverResourceBlockDetailCollection" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.occHandoverResourceBlockDetailCollection"></a>

```go
func OccHandoverResourceBlockDetailCollection() DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList">DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `HostIdInput`<sup>Optional</sup> <a name="HostIdInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.hostIdInput"></a>

```go
func HostIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `OccHandoverResourceBlockIdInput`<sup>Optional</sup> <a name="OccHandoverResourceBlockIdInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.occHandoverResourceBlockIdInput"></a>

```go
func OccHandoverResourceBlockIdInput() *string
```

- *Type:* *string

---

##### `HostId`<sup>Required</sup> <a name="HostId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.hostId"></a>

```go
func HostId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `OccHandoverResourceBlockId`<sup>Required</sup> <a name="OccHandoverResourceBlockId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.occHandoverResourceBlockId"></a>

```go
func OccHandoverResourceBlockId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCapacityManagementOccHandoverResourceBlockDetailsConfig <a name="DataOciCapacityManagementOccHandoverResourceBlockDetailsConfig" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicapacitymanagementocchandoverresourceblockdetails"

&dataocicapacitymanagementocchandoverresourceblockdetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	OccHandoverResourceBlockId: *string,
	Filter: interface{},
	HostId: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsConfig.property.occHandoverResourceBlockId">OccHandoverResourceBlockId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_handover_resource_block_details#occ_handover_resource_block_id DataOciCapacityManagementOccHandoverResourceBlockDetails#occ_handover_resource_block_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsConfig.property.hostId">HostId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_handover_resource_block_details#host_id DataOciCapacityManagementOccHandoverResourceBlockDetails#host_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_handover_resource_block_details#id DataOciCapacityManagementOccHandoverResourceBlockDetails#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `OccHandoverResourceBlockId`<sup>Required</sup> <a name="OccHandoverResourceBlockId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsConfig.property.occHandoverResourceBlockId"></a>

```go
OccHandoverResourceBlockId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_handover_resource_block_details#occ_handover_resource_block_id DataOciCapacityManagementOccHandoverResourceBlockDetails#occ_handover_resource_block_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_handover_resource_block_details#filter DataOciCapacityManagementOccHandoverResourceBlockDetails#filter}

---

##### `HostId`<sup>Optional</sup> <a name="HostId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsConfig.property.hostId"></a>

```go
HostId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_handover_resource_block_details#host_id DataOciCapacityManagementOccHandoverResourceBlockDetails#host_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_handover_resource_block_details#id DataOciCapacityManagementOccHandoverResourceBlockDetails#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciCapacityManagementOccHandoverResourceBlockDetailsFilter <a name="DataOciCapacityManagementOccHandoverResourceBlockDetailsFilter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicapacitymanagementocchandoverresourceblockdetails"

&dataocicapacitymanagementocchandoverresourceblockdetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_handover_resource_block_details#name DataOciCapacityManagementOccHandoverResourceBlockDetails#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_handover_resource_block_details#values DataOciCapacityManagementOccHandoverResourceBlockDetails#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_handover_resource_block_details#regex DataOciCapacityManagementOccHandoverResourceBlockDetails#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_handover_resource_block_details#name DataOciCapacityManagementOccHandoverResourceBlockDetails#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_handover_resource_block_details#values DataOciCapacityManagementOccHandoverResourceBlockDetails#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_handover_resource_block_details#regex DataOciCapacityManagementOccHandoverResourceBlockDetails#regex}.

---

### DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollection <a name="DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollection" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicapacitymanagementocchandoverresourceblockdetails"

&dataocicapacitymanagementocchandoverresourceblockdetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollection {

}
```


### DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItems <a name="DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicapacitymanagementocchandoverresourceblockdetails"

&dataocicapacitymanagementocchandoverresourceblockdetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItems {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterList <a name="DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicapacitymanagementocchandoverresourceblockdetails"

dataocicapacitymanagementocchandoverresourceblockdetails.NewDataOciCapacityManagementOccHandoverResourceBlockDetailsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterList.get"></a>

```go
func Get(index *f64) DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference <a name="DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicapacitymanagementocchandoverresourceblockdetails"

dataocicapacitymanagementocchandoverresourceblockdetails.NewDataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList <a name="DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicapacitymanagementocchandoverresourceblockdetails"

dataocicapacitymanagementocchandoverresourceblockdetails.NewDataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference <a name="DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicapacitymanagementocchandoverresourceblockdetails"

dataocicapacitymanagementocchandoverresourceblockdetails.NewDataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.property.details">Details</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.property.occResourceHandoverBlockId">OccResourceHandoverBlockId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItems">DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Details`<sup>Required</sup> <a name="Details" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.property.details"></a>

```go
func Details() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `OccResourceHandoverBlockId`<sup>Required</sup> <a name="OccResourceHandoverBlockId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.property.occResourceHandoverBlockId"></a>

```go
func OccResourceHandoverBlockId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItems">DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItems</a>

---


### DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList <a name="DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicapacitymanagementocchandoverresourceblockdetails"

dataocicapacitymanagementocchandoverresourceblockdetails.NewDataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList.get"></a>

```go
func Get(index *f64) DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference <a name="DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicapacitymanagementocchandoverresourceblockdetails"

dataocicapacitymanagementocchandoverresourceblockdetails.NewDataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList">DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollection">DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.property.items"></a>

```go
func Items() DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList">DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollection">DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollection</a>

---



