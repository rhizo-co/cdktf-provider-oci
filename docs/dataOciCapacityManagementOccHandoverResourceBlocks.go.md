# `dataOciCapacityManagementOccHandoverResourceBlocks` Submodule <a name="`dataOciCapacityManagementOccHandoverResourceBlocks` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCapacityManagementOccHandoverResourceBlocks <a name="DataOciCapacityManagementOccHandoverResourceBlocks" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_handover_resource_blocks oci_capacity_management_occ_handover_resource_blocks}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicapacitymanagementocchandoverresourceblocks"

dataocicapacitymanagementocchandoverresourceblocks.NewDataOciCapacityManagementOccHandoverResourceBlocks(scope Construct, id *string, config DataOciCapacityManagementOccHandoverResourceBlocksConfig) DataOciCapacityManagementOccHandoverResourceBlocks
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksConfig">DataOciCapacityManagementOccHandoverResourceBlocksConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksConfig">DataOciCapacityManagementOccHandoverResourceBlocksConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.resetHandoverDateGreaterThanOrEqualTo">ResetHandoverDateGreaterThanOrEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.resetHandoverDateLessThanOrEqualTo">ResetHandoverDateLessThanOrEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.resetHandoverResourceName">ResetHandoverResourceName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.resetOccHandoverResourceBlockId">ResetOccHandoverResourceBlockId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.resetCompartmentId"></a>

```go
func ResetCompartmentId()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetHandoverDateGreaterThanOrEqualTo` <a name="ResetHandoverDateGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.resetHandoverDateGreaterThanOrEqualTo"></a>

```go
func ResetHandoverDateGreaterThanOrEqualTo()
```

##### `ResetHandoverDateLessThanOrEqualTo` <a name="ResetHandoverDateLessThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.resetHandoverDateLessThanOrEqualTo"></a>

```go
func ResetHandoverDateLessThanOrEqualTo()
```

##### `ResetHandoverResourceName` <a name="ResetHandoverResourceName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.resetHandoverResourceName"></a>

```go
func ResetHandoverResourceName()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.resetId"></a>

```go
func ResetId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetOccHandoverResourceBlockId` <a name="ResetOccHandoverResourceBlockId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.resetOccHandoverResourceBlockId"></a>

```go
func ResetOccHandoverResourceBlockId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCapacityManagementOccHandoverResourceBlocks resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicapacitymanagementocchandoverresourceblocks"

dataocicapacitymanagementocchandoverresourceblocks.DataOciCapacityManagementOccHandoverResourceBlocks_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicapacitymanagementocchandoverresourceblocks"

dataocicapacitymanagementocchandoverresourceblocks.DataOciCapacityManagementOccHandoverResourceBlocks_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicapacitymanagementocchandoverresourceblocks"

dataocicapacitymanagementocchandoverresourceblocks.DataOciCapacityManagementOccHandoverResourceBlocks_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicapacitymanagementocchandoverresourceblocks"

dataocicapacitymanagementocchandoverresourceblocks.DataOciCapacityManagementOccHandoverResourceBlocks_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciCapacityManagementOccHandoverResourceBlocks resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciCapacityManagementOccHandoverResourceBlocks to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciCapacityManagementOccHandoverResourceBlocks that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_handover_resource_blocks#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCapacityManagementOccHandoverResourceBlocks to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterList">DataOciCapacityManagementOccHandoverResourceBlocksFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.occHandoverResourceBlockCollection">OccHandoverResourceBlockCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList">DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.handoverDateGreaterThanOrEqualToInput">HandoverDateGreaterThanOrEqualToInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.handoverDateLessThanOrEqualToInput">HandoverDateLessThanOrEqualToInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.handoverResourceNameInput">HandoverResourceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.occHandoverResourceBlockIdInput">OccHandoverResourceBlockIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.handoverDateGreaterThanOrEqualTo">HandoverDateGreaterThanOrEqualTo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.handoverDateLessThanOrEqualTo">HandoverDateLessThanOrEqualTo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.handoverResourceName">HandoverResourceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.occHandoverResourceBlockId">OccHandoverResourceBlockId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.filter"></a>

```go
func Filter() DataOciCapacityManagementOccHandoverResourceBlocksFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterList">DataOciCapacityManagementOccHandoverResourceBlocksFilterList</a>

---

##### `OccHandoverResourceBlockCollection`<sup>Required</sup> <a name="OccHandoverResourceBlockCollection" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.occHandoverResourceBlockCollection"></a>

```go
func OccHandoverResourceBlockCollection() DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList">DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `HandoverDateGreaterThanOrEqualToInput`<sup>Optional</sup> <a name="HandoverDateGreaterThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.handoverDateGreaterThanOrEqualToInput"></a>

```go
func HandoverDateGreaterThanOrEqualToInput() *string
```

- *Type:* *string

---

##### `HandoverDateLessThanOrEqualToInput`<sup>Optional</sup> <a name="HandoverDateLessThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.handoverDateLessThanOrEqualToInput"></a>

```go
func HandoverDateLessThanOrEqualToInput() *string
```

- *Type:* *string

---

##### `HandoverResourceNameInput`<sup>Optional</sup> <a name="HandoverResourceNameInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.handoverResourceNameInput"></a>

```go
func HandoverResourceNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `OccHandoverResourceBlockIdInput`<sup>Optional</sup> <a name="OccHandoverResourceBlockIdInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.occHandoverResourceBlockIdInput"></a>

```go
func OccHandoverResourceBlockIdInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `HandoverDateGreaterThanOrEqualTo`<sup>Required</sup> <a name="HandoverDateGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.handoverDateGreaterThanOrEqualTo"></a>

```go
func HandoverDateGreaterThanOrEqualTo() *string
```

- *Type:* *string

---

##### `HandoverDateLessThanOrEqualTo`<sup>Required</sup> <a name="HandoverDateLessThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.handoverDateLessThanOrEqualTo"></a>

```go
func HandoverDateLessThanOrEqualTo() *string
```

- *Type:* *string

---

##### `HandoverResourceName`<sup>Required</sup> <a name="HandoverResourceName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.handoverResourceName"></a>

```go
func HandoverResourceName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `OccHandoverResourceBlockId`<sup>Required</sup> <a name="OccHandoverResourceBlockId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.occHandoverResourceBlockId"></a>

```go
func OccHandoverResourceBlockId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCapacityManagementOccHandoverResourceBlocksConfig <a name="DataOciCapacityManagementOccHandoverResourceBlocksConfig" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicapacitymanagementocchandoverresourceblocks"

&dataocicapacitymanagementocchandoverresourceblocks.DataOciCapacityManagementOccHandoverResourceBlocksConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	Filter: interface{},
	HandoverDateGreaterThanOrEqualTo: *string,
	HandoverDateLessThanOrEqualTo: *string,
	HandoverResourceName: *string,
	Id: *string,
	Namespace: *string,
	OccHandoverResourceBlockId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_handover_resource_blocks#compartment_id DataOciCapacityManagementOccHandoverResourceBlocks#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksConfig.property.handoverDateGreaterThanOrEqualTo">HandoverDateGreaterThanOrEqualTo</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_handover_resource_blocks#handover_date_greater_than_or_equal_to DataOciCapacityManagementOccHandoverResourceBlocks#handover_date_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksConfig.property.handoverDateLessThanOrEqualTo">HandoverDateLessThanOrEqualTo</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_handover_resource_blocks#handover_date_less_than_or_equal_to DataOciCapacityManagementOccHandoverResourceBlocks#handover_date_less_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksConfig.property.handoverResourceName">HandoverResourceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_handover_resource_blocks#handover_resource_name DataOciCapacityManagementOccHandoverResourceBlocks#handover_resource_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_handover_resource_blocks#id DataOciCapacityManagementOccHandoverResourceBlocks#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_handover_resource_blocks#namespace DataOciCapacityManagementOccHandoverResourceBlocks#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksConfig.property.occHandoverResourceBlockId">OccHandoverResourceBlockId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_handover_resource_blocks#occ_handover_resource_block_id DataOciCapacityManagementOccHandoverResourceBlocks#occ_handover_resource_block_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_handover_resource_blocks#compartment_id DataOciCapacityManagementOccHandoverResourceBlocks#compartment_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_handover_resource_blocks#filter DataOciCapacityManagementOccHandoverResourceBlocks#filter}

---

##### `HandoverDateGreaterThanOrEqualTo`<sup>Optional</sup> <a name="HandoverDateGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksConfig.property.handoverDateGreaterThanOrEqualTo"></a>

```go
HandoverDateGreaterThanOrEqualTo *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_handover_resource_blocks#handover_date_greater_than_or_equal_to DataOciCapacityManagementOccHandoverResourceBlocks#handover_date_greater_than_or_equal_to}.

---

##### `HandoverDateLessThanOrEqualTo`<sup>Optional</sup> <a name="HandoverDateLessThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksConfig.property.handoverDateLessThanOrEqualTo"></a>

```go
HandoverDateLessThanOrEqualTo *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_handover_resource_blocks#handover_date_less_than_or_equal_to DataOciCapacityManagementOccHandoverResourceBlocks#handover_date_less_than_or_equal_to}.

---

##### `HandoverResourceName`<sup>Optional</sup> <a name="HandoverResourceName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksConfig.property.handoverResourceName"></a>

```go
HandoverResourceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_handover_resource_blocks#handover_resource_name DataOciCapacityManagementOccHandoverResourceBlocks#handover_resource_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_handover_resource_blocks#id DataOciCapacityManagementOccHandoverResourceBlocks#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_handover_resource_blocks#namespace DataOciCapacityManagementOccHandoverResourceBlocks#namespace}.

---

##### `OccHandoverResourceBlockId`<sup>Optional</sup> <a name="OccHandoverResourceBlockId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksConfig.property.occHandoverResourceBlockId"></a>

```go
OccHandoverResourceBlockId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_handover_resource_blocks#occ_handover_resource_block_id DataOciCapacityManagementOccHandoverResourceBlocks#occ_handover_resource_block_id}.

---

### DataOciCapacityManagementOccHandoverResourceBlocksFilter <a name="DataOciCapacityManagementOccHandoverResourceBlocksFilter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicapacitymanagementocchandoverresourceblocks"

&dataocicapacitymanagementocchandoverresourceblocks.DataOciCapacityManagementOccHandoverResourceBlocksFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_handover_resource_blocks#name DataOciCapacityManagementOccHandoverResourceBlocks#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_handover_resource_blocks#values DataOciCapacityManagementOccHandoverResourceBlocks#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_handover_resource_blocks#regex DataOciCapacityManagementOccHandoverResourceBlocks#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_handover_resource_blocks#name DataOciCapacityManagementOccHandoverResourceBlocks#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_handover_resource_blocks#values DataOciCapacityManagementOccHandoverResourceBlocks#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_handover_resource_blocks#regex DataOciCapacityManagementOccHandoverResourceBlocks#regex}.

---

### DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollection <a name="DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollection" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicapacitymanagementocchandoverresourceblocks"

&dataocicapacitymanagementocchandoverresourceblocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollection {

}
```


### DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItems <a name="DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicapacitymanagementocchandoverresourceblocks"

&dataocicapacitymanagementocchandoverresourceblocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItems {

}
```


### DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequests <a name="DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequests" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequests"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequests.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicapacitymanagementocchandoverresourceblocks"

&dataocicapacitymanagementocchandoverresourceblocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequests {

}
```


### DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetails <a name="DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetails" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicapacitymanagementocchandoverresourceblocks"

&dataocicapacitymanagementocchandoverresourceblocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetails {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCapacityManagementOccHandoverResourceBlocksFilterList <a name="DataOciCapacityManagementOccHandoverResourceBlocksFilterList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicapacitymanagementocchandoverresourceblocks"

dataocicapacitymanagementocchandoverresourceblocks.NewDataOciCapacityManagementOccHandoverResourceBlocksFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCapacityManagementOccHandoverResourceBlocksFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterList.get"></a>

```go
func Get(index *f64) DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference <a name="DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicapacitymanagementocchandoverresourceblocks"

dataocicapacitymanagementocchandoverresourceblocks.NewDataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList <a name="DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicapacitymanagementocchandoverresourceblocks"

dataocicapacitymanagementocchandoverresourceblocks.NewDataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList.get"></a>

```go
func Get(index *f64) DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference <a name="DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicapacitymanagementocchandoverresourceblocks"

dataocicapacitymanagementocchandoverresourceblocks.NewDataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.property.handoverQuantity">HandoverQuantity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.property.occCapacityRequestId">OccCapacityRequestId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequests">DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequests</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HandoverQuantity`<sup>Required</sup> <a name="HandoverQuantity" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.property.handoverQuantity"></a>

```go
func HandoverQuantity() *string
```

- *Type:* *string

---

##### `OccCapacityRequestId`<sup>Required</sup> <a name="OccCapacityRequestId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.property.occCapacityRequestId"></a>

```go
func OccCapacityRequestId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequests
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequests">DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequests</a>

---


### DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList <a name="DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicapacitymanagementocchandoverresourceblocks"

dataocicapacitymanagementocchandoverresourceblocks.NewDataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference <a name="DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicapacitymanagementocchandoverresourceblocks"

dataocicapacitymanagementocchandoverresourceblocks.NewDataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.property.associatedCapacityRequests">AssociatedCapacityRequests</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList">DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.property.handoverDate">HandoverDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.property.handoverResourceName">HandoverResourceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.property.occCustomerGroupId">OccCustomerGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.property.placementDetails">PlacementDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList">DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.property.totalHandoverQuantity">TotalHandoverQuantity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItems">DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AssociatedCapacityRequests`<sup>Required</sup> <a name="AssociatedCapacityRequests" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.property.associatedCapacityRequests"></a>

```go
func AssociatedCapacityRequests() DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList">DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList</a>

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `HandoverDate`<sup>Required</sup> <a name="HandoverDate" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.property.handoverDate"></a>

```go
func HandoverDate() *string
```

- *Type:* *string

---

##### `HandoverResourceName`<sup>Required</sup> <a name="HandoverResourceName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.property.handoverResourceName"></a>

```go
func HandoverResourceName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `OccCustomerGroupId`<sup>Required</sup> <a name="OccCustomerGroupId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.property.occCustomerGroupId"></a>

```go
func OccCustomerGroupId() *string
```

- *Type:* *string

---

##### `PlacementDetails`<sup>Required</sup> <a name="PlacementDetails" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.property.placementDetails"></a>

```go
func PlacementDetails() DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList">DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList</a>

---

##### `TotalHandoverQuantity`<sup>Required</sup> <a name="TotalHandoverQuantity" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.property.totalHandoverQuantity"></a>

```go
func TotalHandoverQuantity() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItems">DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItems</a>

---


### DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList <a name="DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicapacitymanagementocchandoverresourceblocks"

dataocicapacitymanagementocchandoverresourceblocks.NewDataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList.get"></a>

```go
func Get(index *f64) DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference <a name="DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicapacitymanagementocchandoverresourceblocks"

dataocicapacitymanagementocchandoverresourceblocks.NewDataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.property.block">Block</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.property.building">Building</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.property.room">Room</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.property.workloadType">WorkloadType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetails">DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.property.availabilityDomain"></a>

```go
func AvailabilityDomain() *string
```

- *Type:* *string

---

##### `Block`<sup>Required</sup> <a name="Block" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.property.block"></a>

```go
func Block() *string
```

- *Type:* *string

---

##### `Building`<sup>Required</sup> <a name="Building" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.property.building"></a>

```go
func Building() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Room`<sup>Required</sup> <a name="Room" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.property.room"></a>

```go
func Room() *string
```

- *Type:* *string

---

##### `WorkloadType`<sup>Required</sup> <a name="WorkloadType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.property.workloadType"></a>

```go
func WorkloadType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetails">DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetails</a>

---


### DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList <a name="DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicapacitymanagementocchandoverresourceblocks"

dataocicapacitymanagementocchandoverresourceblocks.NewDataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList.get"></a>

```go
func Get(index *f64) DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference <a name="DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicapacitymanagementocchandoverresourceblocks"

dataocicapacitymanagementocchandoverresourceblocks.NewDataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList">DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollection">DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.property.items"></a>

```go
func Items() DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList">DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollection">DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollection</a>

---



