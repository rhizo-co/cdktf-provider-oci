# `dataOciCoreIpInventoryVcnOverlaps` Submodule <a name="`dataOciCoreIpInventoryVcnOverlaps` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreIpInventoryVcnOverlaps <a name="DataOciCoreIpInventoryVcnOverlaps" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_vcn_overlaps oci_core_ip_inventory_vcn_overlaps}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreipinventoryvcnoverlaps"

dataocicoreipinventoryvcnoverlaps.NewDataOciCoreIpInventoryVcnOverlaps(scope Construct, id *string, config DataOciCoreIpInventoryVcnOverlapsConfig) DataOciCoreIpInventoryVcnOverlaps
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig">DataOciCoreIpInventoryVcnOverlapsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig">DataOciCoreIpInventoryVcnOverlapsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreIpInventoryVcnOverlaps resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreipinventoryvcnoverlaps"

dataocicoreipinventoryvcnoverlaps.DataOciCoreIpInventoryVcnOverlaps_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreipinventoryvcnoverlaps"

dataocicoreipinventoryvcnoverlaps.DataOciCoreIpInventoryVcnOverlaps_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreipinventoryvcnoverlaps"

dataocicoreipinventoryvcnoverlaps.DataOciCoreIpInventoryVcnOverlaps_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreipinventoryvcnoverlaps"

dataocicoreipinventoryvcnoverlaps.DataOciCoreIpInventoryVcnOverlaps_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciCoreIpInventoryVcnOverlaps resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciCoreIpInventoryVcnOverlaps to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciCoreIpInventoryVcnOverlaps that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_vcn_overlaps#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreIpInventoryVcnOverlaps to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList">DataOciCoreIpInventoryVcnOverlapsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.ipInventoryVcnOverlapSummary">IpInventoryVcnOverlapSummary</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList">DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.lastUpdatedTimestamp">LastUpdatedTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.overlapCount">OverlapCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.compartmentListInput">CompartmentListInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.regionListInput">RegionListInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.vcnIdInput">VcnIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.compartmentList">CompartmentList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.regionList">RegionList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.vcnId">VcnId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.filter"></a>

```go
func Filter() DataOciCoreIpInventoryVcnOverlapsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList">DataOciCoreIpInventoryVcnOverlapsFilterList</a>

---

##### `IpInventoryVcnOverlapSummary`<sup>Required</sup> <a name="IpInventoryVcnOverlapSummary" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.ipInventoryVcnOverlapSummary"></a>

```go
func IpInventoryVcnOverlapSummary() DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList">DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList</a>

---

##### `LastUpdatedTimestamp`<sup>Required</sup> <a name="LastUpdatedTimestamp" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.lastUpdatedTimestamp"></a>

```go
func LastUpdatedTimestamp() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `OverlapCount`<sup>Required</sup> <a name="OverlapCount" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.overlapCount"></a>

```go
func OverlapCount() *f64
```

- *Type:* *f64

---

##### `CompartmentListInput`<sup>Optional</sup> <a name="CompartmentListInput" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.compartmentListInput"></a>

```go
func CompartmentListInput() *[]*string
```

- *Type:* *[]*string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `RegionListInput`<sup>Optional</sup> <a name="RegionListInput" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.regionListInput"></a>

```go
func RegionListInput() *[]*string
```

- *Type:* *[]*string

---

##### `VcnIdInput`<sup>Optional</sup> <a name="VcnIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.vcnIdInput"></a>

```go
func VcnIdInput() *string
```

- *Type:* *string

---

##### `CompartmentList`<sup>Required</sup> <a name="CompartmentList" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.compartmentList"></a>

```go
func CompartmentList() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `RegionList`<sup>Required</sup> <a name="RegionList" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.regionList"></a>

```go
func RegionList() *[]*string
```

- *Type:* *[]*string

---

##### `VcnId`<sup>Required</sup> <a name="VcnId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.vcnId"></a>

```go
func VcnId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreIpInventoryVcnOverlapsConfig <a name="DataOciCoreIpInventoryVcnOverlapsConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreipinventoryvcnoverlaps"

&dataocicoreipinventoryvcnoverlaps.DataOciCoreIpInventoryVcnOverlapsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentList: *[]*string,
	RegionList: *[]*string,
	VcnId: *string,
	Filter: interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.compartmentList">CompartmentList</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_vcn_overlaps#compartment_list DataOciCoreIpInventoryVcnOverlaps#compartment_list}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.regionList">RegionList</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_vcn_overlaps#region_list DataOciCoreIpInventoryVcnOverlaps#region_list}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.vcnId">VcnId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_vcn_overlaps#vcn_id DataOciCoreIpInventoryVcnOverlaps#vcn_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_vcn_overlaps#id DataOciCoreIpInventoryVcnOverlaps#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentList`<sup>Required</sup> <a name="CompartmentList" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.compartmentList"></a>

```go
CompartmentList *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_vcn_overlaps#compartment_list DataOciCoreIpInventoryVcnOverlaps#compartment_list}.

---

##### `RegionList`<sup>Required</sup> <a name="RegionList" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.regionList"></a>

```go
RegionList *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_vcn_overlaps#region_list DataOciCoreIpInventoryVcnOverlaps#region_list}.

---

##### `VcnId`<sup>Required</sup> <a name="VcnId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.vcnId"></a>

```go
VcnId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_vcn_overlaps#vcn_id DataOciCoreIpInventoryVcnOverlaps#vcn_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_vcn_overlaps#filter DataOciCoreIpInventoryVcnOverlaps#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_vcn_overlaps#id DataOciCoreIpInventoryVcnOverlaps#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciCoreIpInventoryVcnOverlapsFilter <a name="DataOciCoreIpInventoryVcnOverlapsFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreipinventoryvcnoverlaps"

&dataocicoreipinventoryvcnoverlaps.DataOciCoreIpInventoryVcnOverlapsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_vcn_overlaps#name DataOciCoreIpInventoryVcnOverlaps#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_vcn_overlaps#values DataOciCoreIpInventoryVcnOverlaps#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_vcn_overlaps#regex DataOciCoreIpInventoryVcnOverlaps#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_vcn_overlaps#name DataOciCoreIpInventoryVcnOverlaps#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_vcn_overlaps#values DataOciCoreIpInventoryVcnOverlaps#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_vcn_overlaps#regex DataOciCoreIpInventoryVcnOverlaps#regex}.

---

### DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummary <a name="DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummary" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummary"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummary.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreipinventoryvcnoverlaps"

&dataocicoreipinventoryvcnoverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummary {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreIpInventoryVcnOverlapsFilterList <a name="DataOciCoreIpInventoryVcnOverlapsFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreipinventoryvcnoverlaps"

dataocicoreipinventoryvcnoverlaps.NewDataOciCoreIpInventoryVcnOverlapsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreIpInventoryVcnOverlapsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.get"></a>

```go
func Get(index *f64) DataOciCoreIpInventoryVcnOverlapsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciCoreIpInventoryVcnOverlapsFilterOutputReference <a name="DataOciCoreIpInventoryVcnOverlapsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreipinventoryvcnoverlaps"

dataocicoreipinventoryvcnoverlaps.NewDataOciCoreIpInventoryVcnOverlapsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreIpInventoryVcnOverlapsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList <a name="DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreipinventoryvcnoverlaps"

dataocicoreipinventoryvcnoverlaps.NewDataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.get"></a>

```go
func Get(index *f64) DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference <a name="DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreipinventoryvcnoverlaps"

dataocicoreipinventoryvcnoverlaps.NewDataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.property.cidr">Cidr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.property.overlappingCidr">OverlappingCidr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.property.overlappingVcnId">OverlappingVcnId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.property.overlappingVcnName">OverlappingVcnName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummary">DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummary</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Cidr`<sup>Required</sup> <a name="Cidr" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.property.cidr"></a>

```go
func Cidr() *string
```

- *Type:* *string

---

##### `OverlappingCidr`<sup>Required</sup> <a name="OverlappingCidr" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.property.overlappingCidr"></a>

```go
func OverlappingCidr() *string
```

- *Type:* *string

---

##### `OverlappingVcnId`<sup>Required</sup> <a name="OverlappingVcnId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.property.overlappingVcnId"></a>

```go
func OverlappingVcnId() *string
```

- *Type:* *string

---

##### `OverlappingVcnName`<sup>Required</sup> <a name="OverlappingVcnName" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.property.overlappingVcnName"></a>

```go
func OverlappingVcnName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummary
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummary">DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummary</a>

---



