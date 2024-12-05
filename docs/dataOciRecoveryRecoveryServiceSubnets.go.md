# `dataOciRecoveryRecoveryServiceSubnets` Submodule <a name="`dataOciRecoveryRecoveryServiceSubnets` Submodule" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciRecoveryRecoveryServiceSubnets <a name="DataOciRecoveryRecoveryServiceSubnets" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_recovery_service_subnets oci_recovery_recovery_service_subnets}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocirecoveryrecoveryservicesubnets"

dataocirecoveryrecoveryservicesubnets.NewDataOciRecoveryRecoveryServiceSubnets(scope Construct, id *string, config DataOciRecoveryRecoveryServiceSubnetsConfig) DataOciRecoveryRecoveryServiceSubnets
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsConfig">DataOciRecoveryRecoveryServiceSubnetsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsConfig">DataOciRecoveryRecoveryServiceSubnetsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.resetVcnId">ResetVcnId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.resetId"></a>

```go
func ResetId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.resetState"></a>

```go
func ResetState()
```

##### `ResetVcnId` <a name="ResetVcnId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.resetVcnId"></a>

```go
func ResetVcnId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciRecoveryRecoveryServiceSubnets resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocirecoveryrecoveryservicesubnets"

dataocirecoveryrecoveryservicesubnets.DataOciRecoveryRecoveryServiceSubnets_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocirecoveryrecoveryservicesubnets"

dataocirecoveryrecoveryservicesubnets.DataOciRecoveryRecoveryServiceSubnets_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocirecoveryrecoveryservicesubnets"

dataocirecoveryrecoveryservicesubnets.DataOciRecoveryRecoveryServiceSubnets_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocirecoveryrecoveryservicesubnets"

dataocirecoveryrecoveryservicesubnets.DataOciRecoveryRecoveryServiceSubnets_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciRecoveryRecoveryServiceSubnets resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciRecoveryRecoveryServiceSubnets to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciRecoveryRecoveryServiceSubnets that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_recovery_service_subnets#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciRecoveryRecoveryServiceSubnets to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterList">DataOciRecoveryRecoveryServiceSubnetsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.recoveryServiceSubnetCollection">RecoveryServiceSubnetCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionList">DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.vcnIdInput">VcnIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.vcnId">VcnId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.filter"></a>

```go
func Filter() DataOciRecoveryRecoveryServiceSubnetsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterList">DataOciRecoveryRecoveryServiceSubnetsFilterList</a>

---

##### `RecoveryServiceSubnetCollection`<sup>Required</sup> <a name="RecoveryServiceSubnetCollection" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.recoveryServiceSubnetCollection"></a>

```go
func RecoveryServiceSubnetCollection() DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionList">DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `VcnIdInput`<sup>Optional</sup> <a name="VcnIdInput" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.vcnIdInput"></a>

```go
func VcnIdInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `VcnId`<sup>Required</sup> <a name="VcnId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.vcnId"></a>

```go
func VcnId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnets.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciRecoveryRecoveryServiceSubnetsConfig <a name="DataOciRecoveryRecoveryServiceSubnetsConfig" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocirecoveryrecoveryservicesubnets"

&dataocirecoveryrecoveryservicesubnets.DataOciRecoveryRecoveryServiceSubnetsConfig {
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
	State: *string,
	VcnId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_recovery_service_subnets#compartment_id DataOciRecoveryRecoveryServiceSubnets#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_recovery_service_subnets#display_name DataOciRecoveryRecoveryServiceSubnets#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_recovery_service_subnets#id DataOciRecoveryRecoveryServiceSubnets#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_recovery_service_subnets#state DataOciRecoveryRecoveryServiceSubnets#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsConfig.property.vcnId">VcnId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_recovery_service_subnets#vcn_id DataOciRecoveryRecoveryServiceSubnets#vcn_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_recovery_service_subnets#compartment_id DataOciRecoveryRecoveryServiceSubnets#compartment_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_recovery_service_subnets#display_name DataOciRecoveryRecoveryServiceSubnets#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_recovery_service_subnets#filter DataOciRecoveryRecoveryServiceSubnets#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_recovery_service_subnets#id DataOciRecoveryRecoveryServiceSubnets#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_recovery_service_subnets#state DataOciRecoveryRecoveryServiceSubnets#state}.

---

##### `VcnId`<sup>Optional</sup> <a name="VcnId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsConfig.property.vcnId"></a>

```go
VcnId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_recovery_service_subnets#vcn_id DataOciRecoveryRecoveryServiceSubnets#vcn_id}.

---

### DataOciRecoveryRecoveryServiceSubnetsFilter <a name="DataOciRecoveryRecoveryServiceSubnetsFilter" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocirecoveryrecoveryservicesubnets"

&dataocirecoveryrecoveryservicesubnets.DataOciRecoveryRecoveryServiceSubnetsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_recovery_service_subnets#name DataOciRecoveryRecoveryServiceSubnets#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_recovery_service_subnets#values DataOciRecoveryRecoveryServiceSubnets#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_recovery_service_subnets#regex DataOciRecoveryRecoveryServiceSubnets#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_recovery_service_subnets#name DataOciRecoveryRecoveryServiceSubnets#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_recovery_service_subnets#values DataOciRecoveryRecoveryServiceSubnets#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/recovery_recovery_service_subnets#regex DataOciRecoveryRecoveryServiceSubnets#regex}.

---

### DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollection <a name="DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollection" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocirecoveryrecoveryservicesubnets"

&dataocirecoveryrecoveryservicesubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollection {

}
```


### DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItems <a name="DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocirecoveryrecoveryservicesubnets"

&dataocirecoveryrecoveryservicesubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItems {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciRecoveryRecoveryServiceSubnetsFilterList <a name="DataOciRecoveryRecoveryServiceSubnetsFilterList" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocirecoveryrecoveryservicesubnets"

dataocirecoveryrecoveryservicesubnets.NewDataOciRecoveryRecoveryServiceSubnetsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciRecoveryRecoveryServiceSubnetsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterList.get"></a>

```go
func Get(index *f64) DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference <a name="DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocirecoveryrecoveryservicesubnets"

dataocirecoveryrecoveryservicesubnets.NewDataOciRecoveryRecoveryServiceSubnetsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsList <a name="DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocirecoveryrecoveryservicesubnets"

dataocirecoveryrecoveryservicesubnets.NewDataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference <a name="DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocirecoveryrecoveryservicesubnets"

dataocirecoveryrecoveryservicesubnets.NewDataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.property.nsgIds">NsgIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.property.subnets">Subnets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.property.vcnId">VcnId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItems">DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `NsgIds`<sup>Required</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.property.nsgIds"></a>

```go
func NsgIds() *[]*string
```

- *Type:* *[]*string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `Subnets`<sup>Required</sup> <a name="Subnets" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.property.subnets"></a>

```go
func Subnets() *[]*string
```

- *Type:* *[]*string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `VcnId`<sup>Required</sup> <a name="VcnId" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.property.vcnId"></a>

```go
func VcnId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItems">DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItems</a>

---


### DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionList <a name="DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionList" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocirecoveryrecoveryservicesubnets"

dataocirecoveryrecoveryservicesubnets.NewDataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionList.get"></a>

```go
func Get(index *f64) DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference <a name="DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocirecoveryrecoveryservicesubnets"

dataocirecoveryrecoveryservicesubnets.NewDataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsList">DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollection">DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.property.items"></a>

```go
func Items() DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsList">DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciRecoveryRecoveryServiceSubnets.DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollection">DataOciRecoveryRecoveryServiceSubnetsRecoveryServiceSubnetCollection</a>

---



