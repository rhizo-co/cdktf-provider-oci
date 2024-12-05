# `dataOciComputeCloudAtCustomerCccInfrastructure` Submodule <a name="`dataOciComputeCloudAtCustomerCccInfrastructure` Submodule" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciComputeCloudAtCustomerCccInfrastructure <a name="DataOciComputeCloudAtCustomerCccInfrastructure" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructure oci_compute_cloud_at_customer_ccc_infrastructure}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicomputecloudatcustomercccinfrastructure"

dataocicomputecloudatcustomercccinfrastructure.NewDataOciComputeCloudAtCustomerCccInfrastructure(scope Construct, id *string, config DataOciComputeCloudAtCustomerCccInfrastructureConfig) DataOciComputeCloudAtCustomerCccInfrastructure
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureConfig">DataOciComputeCloudAtCustomerCccInfrastructureConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureConfig">DataOciComputeCloudAtCustomerCccInfrastructureConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciComputeCloudAtCustomerCccInfrastructure resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicomputecloudatcustomercccinfrastructure"

dataocicomputecloudatcustomercccinfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicomputecloudatcustomercccinfrastructure"

dataocicomputecloudatcustomercccinfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicomputecloudatcustomercccinfrastructure"

dataocicomputecloudatcustomercccinfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicomputecloudatcustomercccinfrastructure"

dataocicomputecloudatcustomercccinfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciComputeCloudAtCustomerCccInfrastructure resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciComputeCloudAtCustomerCccInfrastructure to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciComputeCloudAtCustomerCccInfrastructure that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructure#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciComputeCloudAtCustomerCccInfrastructure to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.cccUpgradeScheduleId">CccUpgradeScheduleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.connectionDetails">ConnectionDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.connectionState">ConnectionState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.infrastructureInventory">InfrastructureInventory</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList">DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.infrastructureNetworkConfiguration">InfrastructureNetworkConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList">DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.provisioningFingerprint">ProvisioningFingerprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.provisioningPin">ProvisioningPin</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.shortName">ShortName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.upgradeInformation">UpgradeInformation</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList">DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.cccInfrastructureIdInput">CccInfrastructureIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.cccInfrastructureId">CccInfrastructureId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `CccUpgradeScheduleId`<sup>Required</sup> <a name="CccUpgradeScheduleId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.cccUpgradeScheduleId"></a>

```go
func CccUpgradeScheduleId() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `ConnectionDetails`<sup>Required</sup> <a name="ConnectionDetails" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.connectionDetails"></a>

```go
func ConnectionDetails() *string
```

- *Type:* *string

---

##### `ConnectionState`<sup>Required</sup> <a name="ConnectionState" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.connectionState"></a>

```go
func ConnectionState() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InfrastructureInventory`<sup>Required</sup> <a name="InfrastructureInventory" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.infrastructureInventory"></a>

```go
func InfrastructureInventory() DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList">DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList</a>

---

##### `InfrastructureNetworkConfiguration`<sup>Required</sup> <a name="InfrastructureNetworkConfiguration" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.infrastructureNetworkConfiguration"></a>

```go
func InfrastructureNetworkConfiguration() DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList">DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList</a>

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `ProvisioningFingerprint`<sup>Required</sup> <a name="ProvisioningFingerprint" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.provisioningFingerprint"></a>

```go
func ProvisioningFingerprint() *string
```

- *Type:* *string

---

##### `ProvisioningPin`<sup>Required</sup> <a name="ProvisioningPin" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.provisioningPin"></a>

```go
func ProvisioningPin() *string
```

- *Type:* *string

---

##### `ShortName`<sup>Required</sup> <a name="ShortName" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.shortName"></a>

```go
func ShortName() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `UpgradeInformation`<sup>Required</sup> <a name="UpgradeInformation" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.upgradeInformation"></a>

```go
func UpgradeInformation() DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList">DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList</a>

---

##### `CccInfrastructureIdInput`<sup>Optional</sup> <a name="CccInfrastructureIdInput" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.cccInfrastructureIdInput"></a>

```go
func CccInfrastructureIdInput() *string
```

- *Type:* *string

---

##### `CccInfrastructureId`<sup>Required</sup> <a name="CccInfrastructureId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.cccInfrastructureId"></a>

```go
func CccInfrastructureId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciComputeCloudAtCustomerCccInfrastructureConfig <a name="DataOciComputeCloudAtCustomerCccInfrastructureConfig" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicomputecloudatcustomercccinfrastructure"

&dataocicomputecloudatcustomercccinfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CccInfrastructureId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureConfig.property.cccInfrastructureId">CccInfrastructureId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructure#ccc_infrastructure_id DataOciComputeCloudAtCustomerCccInfrastructure#ccc_infrastructure_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CccInfrastructureId`<sup>Required</sup> <a name="CccInfrastructureId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureConfig.property.cccInfrastructureId"></a>

```go
CccInfrastructureId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructure#ccc_infrastructure_id DataOciComputeCloudAtCustomerCccInfrastructure#ccc_infrastructure_id}.

---

### DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventory <a name="DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventory" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventory"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventory.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicomputecloudatcustomercccinfrastructure"

&dataocicomputecloudatcustomercccinfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventory {

}
```


### DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfiguration <a name="DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfiguration" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfiguration.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicomputecloudatcustomercccinfrastructure"

&dataocicomputecloudatcustomercccinfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfiguration {

}
```


### DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamic <a name="DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamic" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamic"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamic.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicomputecloudatcustomercccinfrastructure"

&dataocicomputecloudatcustomercccinfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamic {

}
```


### DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformation <a name="DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformation" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformation.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicomputecloudatcustomercccinfrastructure"

&dataocicomputecloudatcustomercccinfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformation {

}
```


### DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStatic <a name="DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStatic" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStatic"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStatic.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicomputecloudatcustomercccinfrastructure"

&dataocicomputecloudatcustomercccinfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStatic {

}
```


### DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodes <a name="DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodes" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodes.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicomputecloudatcustomercccinfrastructure"

&dataocicomputecloudatcustomercccinfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodes {

}
```


### DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformation <a name="DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformation" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformation.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicomputecloudatcustomercccinfrastructure"

&dataocicomputecloudatcustomercccinfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformation {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList <a name="DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicomputecloudatcustomercccinfrastructure"

dataocicomputecloudatcustomercccinfrastructure.NewDataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.get"></a>

```go
func Get(index *f64) DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference <a name="DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicomputecloudatcustomercccinfrastructure"

dataocicomputecloudatcustomercccinfrastructure.NewDataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.property.capacityStorageTrayCount">CapacityStorageTrayCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.property.computeNodeCount">ComputeNodeCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.property.managementNodeCount">ManagementNodeCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.property.performanceStorageTrayCount">PerformanceStorageTrayCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.property.serialNumber">SerialNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventory">DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventory</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CapacityStorageTrayCount`<sup>Required</sup> <a name="CapacityStorageTrayCount" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.property.capacityStorageTrayCount"></a>

```go
func CapacityStorageTrayCount() *f64
```

- *Type:* *f64

---

##### `ComputeNodeCount`<sup>Required</sup> <a name="ComputeNodeCount" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.property.computeNodeCount"></a>

```go
func ComputeNodeCount() *f64
```

- *Type:* *f64

---

##### `ManagementNodeCount`<sup>Required</sup> <a name="ManagementNodeCount" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.property.managementNodeCount"></a>

```go
func ManagementNodeCount() *f64
```

- *Type:* *f64

---

##### `PerformanceStorageTrayCount`<sup>Required</sup> <a name="PerformanceStorageTrayCount" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.property.performanceStorageTrayCount"></a>

```go
func PerformanceStorageTrayCount() *f64
```

- *Type:* *f64

---

##### `SerialNumber`<sup>Required</sup> <a name="SerialNumber" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.property.serialNumber"></a>

```go
func SerialNumber() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventory
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventory">DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventory</a>

---


### DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList <a name="DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicomputecloudatcustomercccinfrastructure"

dataocicomputecloudatcustomercccinfrastructure.NewDataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.get"></a>

```go
func Get(index *f64) DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference <a name="DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicomputecloudatcustomercccinfrastructure"

dataocicomputecloudatcustomercccinfrastructure.NewDataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.property.bgpTopology">BgpTopology</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.property.oracleAsn">OracleAsn</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.property.peerInformation">PeerInformation</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList">DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamic">DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamic</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BgpTopology`<sup>Required</sup> <a name="BgpTopology" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.property.bgpTopology"></a>

```go
func BgpTopology() *string
```

- *Type:* *string

---

##### `OracleAsn`<sup>Required</sup> <a name="OracleAsn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.property.oracleAsn"></a>

```go
func OracleAsn() *f64
```

- *Type:* *f64

---

##### `PeerInformation`<sup>Required</sup> <a name="PeerInformation" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.property.peerInformation"></a>

```go
func PeerInformation() DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList">DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamic
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamic">DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamic</a>

---


### DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList <a name="DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicomputecloudatcustomercccinfrastructure"

dataocicomputecloudatcustomercccinfrastructure.NewDataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.get"></a>

```go
func Get(index *f64) DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference <a name="DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicomputecloudatcustomercccinfrastructure"

dataocicomputecloudatcustomercccinfrastructure.NewDataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.property.asn">Asn</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.property.ip">Ip</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformation">DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Asn`<sup>Required</sup> <a name="Asn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.property.asn"></a>

```go
func Asn() *f64
```

- *Type:* *f64

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.property.ip"></a>

```go
func Ip() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformation
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformation">DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformation</a>

---


### DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList <a name="DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicomputecloudatcustomercccinfrastructure"

dataocicomputecloudatcustomercccinfrastructure.NewDataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.get"></a>

```go
func Get(index *f64) DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference <a name="DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicomputecloudatcustomercccinfrastructure"

dataocicomputecloudatcustomercccinfrastructure.NewDataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.property.uplinkHsrpGroup">UplinkHsrpGroup</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.property.uplinkVlan">UplinkVlan</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStatic">DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStatic</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `UplinkHsrpGroup`<sup>Required</sup> <a name="UplinkHsrpGroup" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.property.uplinkHsrpGroup"></a>

```go
func UplinkHsrpGroup() *f64
```

- *Type:* *f64

---

##### `UplinkVlan`<sup>Required</sup> <a name="UplinkVlan" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.property.uplinkVlan"></a>

```go
func UplinkVlan() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStatic
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStatic">DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStatic</a>

---


### DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList <a name="DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicomputecloudatcustomercccinfrastructure"

dataocicomputecloudatcustomercccinfrastructure.NewDataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.get"></a>

```go
func Get(index *f64) DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList <a name="DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicomputecloudatcustomercccinfrastructure"

dataocicomputecloudatcustomercccinfrastructure.NewDataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.get"></a>

```go
func Get(index *f64) DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference <a name="DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicomputecloudatcustomercccinfrastructure"

dataocicomputecloudatcustomercccinfrastructure.NewDataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.property.hostname">Hostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.property.ip">Ip</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodes">DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.property.hostname"></a>

```go
func Hostname() *string
```

- *Type:* *string

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.property.ip"></a>

```go
func Ip() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodes
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodes">DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodes</a>

---


### DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference <a name="DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicomputecloudatcustomercccinfrastructure"

dataocicomputecloudatcustomercccinfrastructure.NewDataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.dnsIps">DnsIps</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.infrastructureRoutingDynamic">InfrastructureRoutingDynamic</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList">DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.infrastructureRoutingStatic">InfrastructureRoutingStatic</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList">DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.managementNodes">ManagementNodes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList">DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.mgmtVipHostname">MgmtVipHostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.mgmtVipIp">MgmtVipIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.spineIps">SpineIps</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.spineVip">SpineVip</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.uplinkDomain">UplinkDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.uplinkGatewayIp">UplinkGatewayIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.uplinkNetmask">UplinkNetmask</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.uplinkPortCount">UplinkPortCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.uplinkPortForwardErrorCorrection">UplinkPortForwardErrorCorrection</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.uplinkPortSpeedInGbps">UplinkPortSpeedInGbps</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.uplinkVlanMtu">UplinkVlanMtu</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfiguration">DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DnsIps`<sup>Required</sup> <a name="DnsIps" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.dnsIps"></a>

```go
func DnsIps() *[]*string
```

- *Type:* *[]*string

---

##### `InfrastructureRoutingDynamic`<sup>Required</sup> <a name="InfrastructureRoutingDynamic" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.infrastructureRoutingDynamic"></a>

```go
func InfrastructureRoutingDynamic() DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList">DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList</a>

---

##### `InfrastructureRoutingStatic`<sup>Required</sup> <a name="InfrastructureRoutingStatic" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.infrastructureRoutingStatic"></a>

```go
func InfrastructureRoutingStatic() DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList">DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList</a>

---

##### `ManagementNodes`<sup>Required</sup> <a name="ManagementNodes" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.managementNodes"></a>

```go
func ManagementNodes() DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList">DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList</a>

---

##### `MgmtVipHostname`<sup>Required</sup> <a name="MgmtVipHostname" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.mgmtVipHostname"></a>

```go
func MgmtVipHostname() *string
```

- *Type:* *string

---

##### `MgmtVipIp`<sup>Required</sup> <a name="MgmtVipIp" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.mgmtVipIp"></a>

```go
func MgmtVipIp() *string
```

- *Type:* *string

---

##### `SpineIps`<sup>Required</sup> <a name="SpineIps" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.spineIps"></a>

```go
func SpineIps() *[]*string
```

- *Type:* *[]*string

---

##### `SpineVip`<sup>Required</sup> <a name="SpineVip" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.spineVip"></a>

```go
func SpineVip() *string
```

- *Type:* *string

---

##### `UplinkDomain`<sup>Required</sup> <a name="UplinkDomain" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.uplinkDomain"></a>

```go
func UplinkDomain() *string
```

- *Type:* *string

---

##### `UplinkGatewayIp`<sup>Required</sup> <a name="UplinkGatewayIp" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.uplinkGatewayIp"></a>

```go
func UplinkGatewayIp() *string
```

- *Type:* *string

---

##### `UplinkNetmask`<sup>Required</sup> <a name="UplinkNetmask" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.uplinkNetmask"></a>

```go
func UplinkNetmask() *string
```

- *Type:* *string

---

##### `UplinkPortCount`<sup>Required</sup> <a name="UplinkPortCount" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.uplinkPortCount"></a>

```go
func UplinkPortCount() *f64
```

- *Type:* *f64

---

##### `UplinkPortForwardErrorCorrection`<sup>Required</sup> <a name="UplinkPortForwardErrorCorrection" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.uplinkPortForwardErrorCorrection"></a>

```go
func UplinkPortForwardErrorCorrection() *string
```

- *Type:* *string

---

##### `UplinkPortSpeedInGbps`<sup>Required</sup> <a name="UplinkPortSpeedInGbps" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.uplinkPortSpeedInGbps"></a>

```go
func UplinkPortSpeedInGbps() *f64
```

- *Type:* *f64

---

##### `UplinkVlanMtu`<sup>Required</sup> <a name="UplinkVlanMtu" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.uplinkVlanMtu"></a>

```go
func UplinkVlanMtu() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfiguration">DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfiguration</a>

---


### DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList <a name="DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicomputecloudatcustomercccinfrastructure"

dataocicomputecloudatcustomercccinfrastructure.NewDataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.get"></a>

```go
func Get(index *f64) DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference <a name="DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicomputecloudatcustomercccinfrastructure"

dataocicomputecloudatcustomercccinfrastructure.NewDataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.property.currentVersion">CurrentVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.property.isActive">IsActive</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.property.scheduledUpgradeDuration">ScheduledUpgradeDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.property.timeOfScheduledUpgrade">TimeOfScheduledUpgrade</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformation">DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CurrentVersion`<sup>Required</sup> <a name="CurrentVersion" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.property.currentVersion"></a>

```go
func CurrentVersion() *string
```

- *Type:* *string

---

##### `IsActive`<sup>Required</sup> <a name="IsActive" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.property.isActive"></a>

```go
func IsActive() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ScheduledUpgradeDuration`<sup>Required</sup> <a name="ScheduledUpgradeDuration" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.property.scheduledUpgradeDuration"></a>

```go
func ScheduledUpgradeDuration() *string
```

- *Type:* *string

---

##### `TimeOfScheduledUpgrade`<sup>Required</sup> <a name="TimeOfScheduledUpgrade" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.property.timeOfScheduledUpgrade"></a>

```go
func TimeOfScheduledUpgrade() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformation
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformation">DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformation</a>

---



