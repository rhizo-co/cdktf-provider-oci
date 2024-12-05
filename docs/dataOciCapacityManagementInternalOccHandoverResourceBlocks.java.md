# `dataOciCapacityManagementInternalOccHandoverResourceBlocks` Submodule <a name="`dataOciCapacityManagementInternalOccHandoverResourceBlocks` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCapacityManagementInternalOccHandoverResourceBlocks <a name="DataOciCapacityManagementInternalOccHandoverResourceBlocks" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_handover_resource_blocks oci_capacity_management_internal_occ_handover_resource_blocks}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_capacity_management_internal_occ_handover_resource_blocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks;

DataOciCapacityManagementInternalOccHandoverResourceBlocks.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .compartmentId(java.lang.String)
    .namespace(java.lang.String)
    .occCustomerGroupId(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciCapacityManagementInternalOccHandoverResourceBlocksFilter>)
//  .handoverDateGreaterThanOrEqualTo(java.lang.String)
//  .handoverDateLessThanOrEqualTo(java.lang.String)
//  .handoverResourceName(java.lang.String)
//  .id(java.lang.String)
//  .occHandoverResourceBlockId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_handover_resource_blocks#compartment_id DataOciCapacityManagementInternalOccHandoverResourceBlocks#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_handover_resource_blocks#namespace DataOciCapacityManagementInternalOccHandoverResourceBlocks#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.Initializer.parameter.occCustomerGroupId">occCustomerGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_handover_resource_blocks#occ_customer_group_id DataOciCapacityManagementInternalOccHandoverResourceBlocks#occ_customer_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilter">DataOciCapacityManagementInternalOccHandoverResourceBlocksFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.Initializer.parameter.handoverDateGreaterThanOrEqualTo">handoverDateGreaterThanOrEqualTo</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_handover_resource_blocks#handover_date_greater_than_or_equal_to DataOciCapacityManagementInternalOccHandoverResourceBlocks#handover_date_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.Initializer.parameter.handoverDateLessThanOrEqualTo">handoverDateLessThanOrEqualTo</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_handover_resource_blocks#handover_date_less_than_or_equal_to DataOciCapacityManagementInternalOccHandoverResourceBlocks#handover_date_less_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.Initializer.parameter.handoverResourceName">handoverResourceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_handover_resource_blocks#handover_resource_name DataOciCapacityManagementInternalOccHandoverResourceBlocks#handover_resource_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_handover_resource_blocks#id DataOciCapacityManagementInternalOccHandoverResourceBlocks#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.Initializer.parameter.occHandoverResourceBlockId">occHandoverResourceBlockId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_handover_resource_blocks#occ_handover_resource_block_id DataOciCapacityManagementInternalOccHandoverResourceBlocks#occ_handover_resource_block_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_handover_resource_blocks#compartment_id DataOciCapacityManagementInternalOccHandoverResourceBlocks#compartment_id}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_handover_resource_blocks#namespace DataOciCapacityManagementInternalOccHandoverResourceBlocks#namespace}.

---

##### `occCustomerGroupId`<sup>Required</sup> <a name="occCustomerGroupId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.Initializer.parameter.occCustomerGroupId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_handover_resource_blocks#occ_customer_group_id DataOciCapacityManagementInternalOccHandoverResourceBlocks#occ_customer_group_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilter">DataOciCapacityManagementInternalOccHandoverResourceBlocksFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_handover_resource_blocks#filter DataOciCapacityManagementInternalOccHandoverResourceBlocks#filter}

---

##### `handoverDateGreaterThanOrEqualTo`<sup>Optional</sup> <a name="handoverDateGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.Initializer.parameter.handoverDateGreaterThanOrEqualTo"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_handover_resource_blocks#handover_date_greater_than_or_equal_to DataOciCapacityManagementInternalOccHandoverResourceBlocks#handover_date_greater_than_or_equal_to}.

---

##### `handoverDateLessThanOrEqualTo`<sup>Optional</sup> <a name="handoverDateLessThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.Initializer.parameter.handoverDateLessThanOrEqualTo"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_handover_resource_blocks#handover_date_less_than_or_equal_to DataOciCapacityManagementInternalOccHandoverResourceBlocks#handover_date_less_than_or_equal_to}.

---

##### `handoverResourceName`<sup>Optional</sup> <a name="handoverResourceName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.Initializer.parameter.handoverResourceName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_handover_resource_blocks#handover_resource_name DataOciCapacityManagementInternalOccHandoverResourceBlocks#handover_resource_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_handover_resource_blocks#id DataOciCapacityManagementInternalOccHandoverResourceBlocks#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `occHandoverResourceBlockId`<sup>Optional</sup> <a name="occHandoverResourceBlockId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.Initializer.parameter.occHandoverResourceBlockId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_handover_resource_blocks#occ_handover_resource_block_id DataOciCapacityManagementInternalOccHandoverResourceBlocks#occ_handover_resource_block_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.resetHandoverDateGreaterThanOrEqualTo">resetHandoverDateGreaterThanOrEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.resetHandoverDateLessThanOrEqualTo">resetHandoverDateLessThanOrEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.resetHandoverResourceName">resetHandoverResourceName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.resetOccHandoverResourceBlockId">resetOccHandoverResourceBlockId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciCapacityManagementInternalOccHandoverResourceBlocksFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilter">DataOciCapacityManagementInternalOccHandoverResourceBlocksFilter</a>>

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetHandoverDateGreaterThanOrEqualTo` <a name="resetHandoverDateGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.resetHandoverDateGreaterThanOrEqualTo"></a>

```java
public void resetHandoverDateGreaterThanOrEqualTo()
```

##### `resetHandoverDateLessThanOrEqualTo` <a name="resetHandoverDateLessThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.resetHandoverDateLessThanOrEqualTo"></a>

```java
public void resetHandoverDateLessThanOrEqualTo()
```

##### `resetHandoverResourceName` <a name="resetHandoverResourceName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.resetHandoverResourceName"></a>

```java
public void resetHandoverResourceName()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.resetId"></a>

```java
public void resetId()
```

##### `resetOccHandoverResourceBlockId` <a name="resetOccHandoverResourceBlockId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.resetOccHandoverResourceBlockId"></a>

```java
public void resetOccHandoverResourceBlockId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCapacityManagementInternalOccHandoverResourceBlocks resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_capacity_management_internal_occ_handover_resource_blocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks;

DataOciCapacityManagementInternalOccHandoverResourceBlocks.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_capacity_management_internal_occ_handover_resource_blocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks;

DataOciCapacityManagementInternalOccHandoverResourceBlocks.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_capacity_management_internal_occ_handover_resource_blocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks;

DataOciCapacityManagementInternalOccHandoverResourceBlocks.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_capacity_management_internal_occ_handover_resource_blocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks;

DataOciCapacityManagementInternalOccHandoverResourceBlocks.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciCapacityManagementInternalOccHandoverResourceBlocks.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciCapacityManagementInternalOccHandoverResourceBlocks resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciCapacityManagementInternalOccHandoverResourceBlocks to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciCapacityManagementInternalOccHandoverResourceBlocks that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_handover_resource_blocks#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCapacityManagementInternalOccHandoverResourceBlocks to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterList">DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.occHandoverResourceBlockCollection">occHandoverResourceBlockCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList">DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilter">DataOciCapacityManagementInternalOccHandoverResourceBlocksFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.handoverDateGreaterThanOrEqualToInput">handoverDateGreaterThanOrEqualToInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.handoverDateLessThanOrEqualToInput">handoverDateLessThanOrEqualToInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.handoverResourceNameInput">handoverResourceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.occCustomerGroupIdInput">occCustomerGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.occHandoverResourceBlockIdInput">occHandoverResourceBlockIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.handoverDateGreaterThanOrEqualTo">handoverDateGreaterThanOrEqualTo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.handoverDateLessThanOrEqualTo">handoverDateLessThanOrEqualTo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.handoverResourceName">handoverResourceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.occCustomerGroupId">occCustomerGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.occHandoverResourceBlockId">occHandoverResourceBlockId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.filter"></a>

```java
public DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterList">DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterList</a>

---

##### `occHandoverResourceBlockCollection`<sup>Required</sup> <a name="occHandoverResourceBlockCollection" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.occHandoverResourceBlockCollection"></a>

```java
public DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList getOccHandoverResourceBlockCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList">DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilter">DataOciCapacityManagementInternalOccHandoverResourceBlocksFilter</a>>

---

##### `handoverDateGreaterThanOrEqualToInput`<sup>Optional</sup> <a name="handoverDateGreaterThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.handoverDateGreaterThanOrEqualToInput"></a>

```java
public java.lang.String getHandoverDateGreaterThanOrEqualToInput();
```

- *Type:* java.lang.String

---

##### `handoverDateLessThanOrEqualToInput`<sup>Optional</sup> <a name="handoverDateLessThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.handoverDateLessThanOrEqualToInput"></a>

```java
public java.lang.String getHandoverDateLessThanOrEqualToInput();
```

- *Type:* java.lang.String

---

##### `handoverResourceNameInput`<sup>Optional</sup> <a name="handoverResourceNameInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.handoverResourceNameInput"></a>

```java
public java.lang.String getHandoverResourceNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `occCustomerGroupIdInput`<sup>Optional</sup> <a name="occCustomerGroupIdInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.occCustomerGroupIdInput"></a>

```java
public java.lang.String getOccCustomerGroupIdInput();
```

- *Type:* java.lang.String

---

##### `occHandoverResourceBlockIdInput`<sup>Optional</sup> <a name="occHandoverResourceBlockIdInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.occHandoverResourceBlockIdInput"></a>

```java
public java.lang.String getOccHandoverResourceBlockIdInput();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `handoverDateGreaterThanOrEqualTo`<sup>Required</sup> <a name="handoverDateGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.handoverDateGreaterThanOrEqualTo"></a>

```java
public java.lang.String getHandoverDateGreaterThanOrEqualTo();
```

- *Type:* java.lang.String

---

##### `handoverDateLessThanOrEqualTo`<sup>Required</sup> <a name="handoverDateLessThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.handoverDateLessThanOrEqualTo"></a>

```java
public java.lang.String getHandoverDateLessThanOrEqualTo();
```

- *Type:* java.lang.String

---

##### `handoverResourceName`<sup>Required</sup> <a name="handoverResourceName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.handoverResourceName"></a>

```java
public java.lang.String getHandoverResourceName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `occCustomerGroupId`<sup>Required</sup> <a name="occCustomerGroupId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.occCustomerGroupId"></a>

```java
public java.lang.String getOccCustomerGroupId();
```

- *Type:* java.lang.String

---

##### `occHandoverResourceBlockId`<sup>Required</sup> <a name="occHandoverResourceBlockId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.occHandoverResourceBlockId"></a>

```java
public java.lang.String getOccHandoverResourceBlockId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocks.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCapacityManagementInternalOccHandoverResourceBlocksConfig <a name="DataOciCapacityManagementInternalOccHandoverResourceBlocksConfig" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_capacity_management_internal_occ_handover_resource_blocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksConfig;

DataOciCapacityManagementInternalOccHandoverResourceBlocksConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .compartmentId(java.lang.String)
    .namespace(java.lang.String)
    .occCustomerGroupId(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciCapacityManagementInternalOccHandoverResourceBlocksFilter>)
//  .handoverDateGreaterThanOrEqualTo(java.lang.String)
//  .handoverDateLessThanOrEqualTo(java.lang.String)
//  .handoverResourceName(java.lang.String)
//  .id(java.lang.String)
//  .occHandoverResourceBlockId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_handover_resource_blocks#compartment_id DataOciCapacityManagementInternalOccHandoverResourceBlocks#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_handover_resource_blocks#namespace DataOciCapacityManagementInternalOccHandoverResourceBlocks#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksConfig.property.occCustomerGroupId">occCustomerGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_handover_resource_blocks#occ_customer_group_id DataOciCapacityManagementInternalOccHandoverResourceBlocks#occ_customer_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilter">DataOciCapacityManagementInternalOccHandoverResourceBlocksFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksConfig.property.handoverDateGreaterThanOrEqualTo">handoverDateGreaterThanOrEqualTo</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_handover_resource_blocks#handover_date_greater_than_or_equal_to DataOciCapacityManagementInternalOccHandoverResourceBlocks#handover_date_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksConfig.property.handoverDateLessThanOrEqualTo">handoverDateLessThanOrEqualTo</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_handover_resource_blocks#handover_date_less_than_or_equal_to DataOciCapacityManagementInternalOccHandoverResourceBlocks#handover_date_less_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksConfig.property.handoverResourceName">handoverResourceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_handover_resource_blocks#handover_resource_name DataOciCapacityManagementInternalOccHandoverResourceBlocks#handover_resource_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_handover_resource_blocks#id DataOciCapacityManagementInternalOccHandoverResourceBlocks#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksConfig.property.occHandoverResourceBlockId">occHandoverResourceBlockId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_handover_resource_blocks#occ_handover_resource_block_id DataOciCapacityManagementInternalOccHandoverResourceBlocks#occ_handover_resource_block_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_handover_resource_blocks#compartment_id DataOciCapacityManagementInternalOccHandoverResourceBlocks#compartment_id}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_handover_resource_blocks#namespace DataOciCapacityManagementInternalOccHandoverResourceBlocks#namespace}.

---

##### `occCustomerGroupId`<sup>Required</sup> <a name="occCustomerGroupId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksConfig.property.occCustomerGroupId"></a>

```java
public java.lang.String getOccCustomerGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_handover_resource_blocks#occ_customer_group_id DataOciCapacityManagementInternalOccHandoverResourceBlocks#occ_customer_group_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilter">DataOciCapacityManagementInternalOccHandoverResourceBlocksFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_handover_resource_blocks#filter DataOciCapacityManagementInternalOccHandoverResourceBlocks#filter}

---

##### `handoverDateGreaterThanOrEqualTo`<sup>Optional</sup> <a name="handoverDateGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksConfig.property.handoverDateGreaterThanOrEqualTo"></a>

```java
public java.lang.String getHandoverDateGreaterThanOrEqualTo();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_handover_resource_blocks#handover_date_greater_than_or_equal_to DataOciCapacityManagementInternalOccHandoverResourceBlocks#handover_date_greater_than_or_equal_to}.

---

##### `handoverDateLessThanOrEqualTo`<sup>Optional</sup> <a name="handoverDateLessThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksConfig.property.handoverDateLessThanOrEqualTo"></a>

```java
public java.lang.String getHandoverDateLessThanOrEqualTo();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_handover_resource_blocks#handover_date_less_than_or_equal_to DataOciCapacityManagementInternalOccHandoverResourceBlocks#handover_date_less_than_or_equal_to}.

---

##### `handoverResourceName`<sup>Optional</sup> <a name="handoverResourceName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksConfig.property.handoverResourceName"></a>

```java
public java.lang.String getHandoverResourceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_handover_resource_blocks#handover_resource_name DataOciCapacityManagementInternalOccHandoverResourceBlocks#handover_resource_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_handover_resource_blocks#id DataOciCapacityManagementInternalOccHandoverResourceBlocks#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `occHandoverResourceBlockId`<sup>Optional</sup> <a name="occHandoverResourceBlockId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksConfig.property.occHandoverResourceBlockId"></a>

```java
public java.lang.String getOccHandoverResourceBlockId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_handover_resource_blocks#occ_handover_resource_block_id DataOciCapacityManagementInternalOccHandoverResourceBlocks#occ_handover_resource_block_id}.

---

### DataOciCapacityManagementInternalOccHandoverResourceBlocksFilter <a name="DataOciCapacityManagementInternalOccHandoverResourceBlocksFilter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_capacity_management_internal_occ_handover_resource_blocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilter;

DataOciCapacityManagementInternalOccHandoverResourceBlocksFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_handover_resource_blocks#name DataOciCapacityManagementInternalOccHandoverResourceBlocks#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_handover_resource_blocks#values DataOciCapacityManagementInternalOccHandoverResourceBlocks#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_handover_resource_blocks#regex DataOciCapacityManagementInternalOccHandoverResourceBlocks#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_handover_resource_blocks#name DataOciCapacityManagementInternalOccHandoverResourceBlocks#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_handover_resource_blocks#values DataOciCapacityManagementInternalOccHandoverResourceBlocks#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_handover_resource_blocks#regex DataOciCapacityManagementInternalOccHandoverResourceBlocks#regex}.

---

### DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollection <a name="DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollection" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_capacity_management_internal_occ_handover_resource_blocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollection;

DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollection.builder()
    .build();
```


### DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItems <a name="DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_capacity_management_internal_occ_handover_resource_blocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItems;

DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItems.builder()
    .build();
```


### DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequests <a name="DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequests" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequests"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequests.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_capacity_management_internal_occ_handover_resource_blocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequests;

DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequests.builder()
    .build();
```


### DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetails <a name="DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetails" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_capacity_management_internal_occ_handover_resource_blocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetails;

DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetails.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterList <a name="DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_capacity_management_internal_occ_handover_resource_blocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterList;

new DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterList.get"></a>

```java
public DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilter">DataOciCapacityManagementInternalOccHandoverResourceBlocksFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilter">DataOciCapacityManagementInternalOccHandoverResourceBlocksFilter</a>>

---


### DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference <a name="DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_capacity_management_internal_occ_handover_resource_blocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference;

new DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilter">DataOciCapacityManagementInternalOccHandoverResourceBlocksFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksFilter">DataOciCapacityManagementInternalOccHandoverResourceBlocksFilter</a>

---


### DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList <a name="DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_capacity_management_internal_occ_handover_resource_blocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList;

new DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList.get"></a>

```java
public DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference <a name="DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_capacity_management_internal_occ_handover_resource_blocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference;

new DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.property.handoverQuantity">handoverQuantity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.property.occCapacityRequestId">occCapacityRequestId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequests">DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequests</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `handoverQuantity`<sup>Required</sup> <a name="handoverQuantity" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.property.handoverQuantity"></a>

```java
public java.lang.String getHandoverQuantity();
```

- *Type:* java.lang.String

---

##### `occCapacityRequestId`<sup>Required</sup> <a name="occCapacityRequestId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.property.occCapacityRequestId"></a>

```java
public java.lang.String getOccCapacityRequestId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.property.internalValue"></a>

```java
public DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequests getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequests">DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequests</a>

---


### DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList <a name="DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_capacity_management_internal_occ_handover_resource_blocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList;

new DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList.get"></a>

```java
public DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference <a name="DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_capacity_management_internal_occ_handover_resource_blocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference;

new DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.property.associatedCapacityRequests">associatedCapacityRequests</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList">DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.property.handoverDate">handoverDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.property.handoverResourceName">handoverResourceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.property.occCustomerGroupId">occCustomerGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.property.placementDetails">placementDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList">DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.property.totalHandoverQuantity">totalHandoverQuantity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItems">DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `associatedCapacityRequests`<sup>Required</sup> <a name="associatedCapacityRequests" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.property.associatedCapacityRequests"></a>

```java
public DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList getAssociatedCapacityRequests();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList">DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `handoverDate`<sup>Required</sup> <a name="handoverDate" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.property.handoverDate"></a>

```java
public java.lang.String getHandoverDate();
```

- *Type:* java.lang.String

---

##### `handoverResourceName`<sup>Required</sup> <a name="handoverResourceName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.property.handoverResourceName"></a>

```java
public java.lang.String getHandoverResourceName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `occCustomerGroupId`<sup>Required</sup> <a name="occCustomerGroupId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.property.occCustomerGroupId"></a>

```java
public java.lang.String getOccCustomerGroupId();
```

- *Type:* java.lang.String

---

##### `placementDetails`<sup>Required</sup> <a name="placementDetails" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.property.placementDetails"></a>

```java
public DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList getPlacementDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList">DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList</a>

---

##### `totalHandoverQuantity`<sup>Required</sup> <a name="totalHandoverQuantity" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.property.totalHandoverQuantity"></a>

```java
public java.lang.String getTotalHandoverQuantity();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.property.internalValue"></a>

```java
public DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItems">DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItems</a>

---


### DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList <a name="DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_capacity_management_internal_occ_handover_resource_blocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList;

new DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList.get"></a>

```java
public DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference <a name="DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_capacity_management_internal_occ_handover_resource_blocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference;

new DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.property.block">block</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.property.building">building</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.property.room">room</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.property.workloadType">workloadType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetails">DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

---

##### `block`<sup>Required</sup> <a name="block" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.property.block"></a>

```java
public java.lang.String getBlock();
```

- *Type:* java.lang.String

---

##### `building`<sup>Required</sup> <a name="building" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.property.building"></a>

```java
public java.lang.String getBuilding();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `room`<sup>Required</sup> <a name="room" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.property.room"></a>

```java
public java.lang.String getRoom();
```

- *Type:* java.lang.String

---

##### `workloadType`<sup>Required</sup> <a name="workloadType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.property.workloadType"></a>

```java
public java.lang.String getWorkloadType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.property.internalValue"></a>

```java
public DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetails">DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetails</a>

---


### DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList <a name="DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_capacity_management_internal_occ_handover_resource_blocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList;

new DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList.get"></a>

```java
public DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference <a name="DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_capacity_management_internal_occ_handover_resource_blocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference;

new DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList">DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollection">DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.property.items"></a>

```java
public DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList">DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.property.internalValue"></a>

```java
public DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlocks.DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollection">DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollection</a>

---



