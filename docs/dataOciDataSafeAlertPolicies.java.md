# `dataOciDataSafeAlertPolicies` Submodule <a name="`dataOciDataSafeAlertPolicies` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeAlertPolicies <a name="DataOciDataSafeAlertPolicies" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_alert_policies oci_data_safe_alert_policies}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_alert_policies.DataOciDataSafeAlertPolicies;

DataOciDataSafeAlertPolicies.Builder.create(Construct scope, java.lang.String id)
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
//  .accessLevel(java.lang.String)
//  .alertPolicyId(java.lang.String)
//  .compartmentIdInSubtree(java.lang.Boolean)
//  .compartmentIdInSubtree(IResolvable)
//  .displayName(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciDataSafeAlertPoliciesFilter>)
//  .id(java.lang.String)
//  .isUserDefined(java.lang.Boolean)
//  .isUserDefined(IResolvable)
//  .state(java.lang.String)
//  .timeCreatedGreaterThanOrEqualTo(java.lang.String)
//  .timeCreatedLessThan(java.lang.String)
//  .type(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_alert_policies#compartment_id DataOciDataSafeAlertPolicies#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.Initializer.parameter.accessLevel">accessLevel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_alert_policies#access_level DataOciDataSafeAlertPolicies#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.Initializer.parameter.alertPolicyId">alertPolicyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_alert_policies#alert_policy_id DataOciDataSafeAlertPolicies#alert_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.Initializer.parameter.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_alert_policies#compartment_id_in_subtree DataOciDataSafeAlertPolicies#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_alert_policies#display_name DataOciDataSafeAlertPolicies#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesFilter">DataOciDataSafeAlertPoliciesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_alert_policies#id DataOciDataSafeAlertPolicies#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.Initializer.parameter.isUserDefined">isUserDefined</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_alert_policies#is_user_defined DataOciDataSafeAlertPolicies#is_user_defined}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_alert_policies#state DataOciDataSafeAlertPolicies#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.Initializer.parameter.timeCreatedGreaterThanOrEqualTo">timeCreatedGreaterThanOrEqualTo</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_alert_policies#time_created_greater_than_or_equal_to DataOciDataSafeAlertPolicies#time_created_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.Initializer.parameter.timeCreatedLessThan">timeCreatedLessThan</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_alert_policies#time_created_less_than DataOciDataSafeAlertPolicies#time_created_less_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_alert_policies#type DataOciDataSafeAlertPolicies#type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_alert_policies#compartment_id DataOciDataSafeAlertPolicies#compartment_id}.

---

##### `accessLevel`<sup>Optional</sup> <a name="accessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.Initializer.parameter.accessLevel"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_alert_policies#access_level DataOciDataSafeAlertPolicies#access_level}.

---

##### `alertPolicyId`<sup>Optional</sup> <a name="alertPolicyId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.Initializer.parameter.alertPolicyId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_alert_policies#alert_policy_id DataOciDataSafeAlertPolicies#alert_policy_id}.

---

##### `compartmentIdInSubtree`<sup>Optional</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.Initializer.parameter.compartmentIdInSubtree"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_alert_policies#compartment_id_in_subtree DataOciDataSafeAlertPolicies#compartment_id_in_subtree}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_alert_policies#display_name DataOciDataSafeAlertPolicies#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesFilter">DataOciDataSafeAlertPoliciesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_alert_policies#filter DataOciDataSafeAlertPolicies#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_alert_policies#id DataOciDataSafeAlertPolicies#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isUserDefined`<sup>Optional</sup> <a name="isUserDefined" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.Initializer.parameter.isUserDefined"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_alert_policies#is_user_defined DataOciDataSafeAlertPolicies#is_user_defined}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_alert_policies#state DataOciDataSafeAlertPolicies#state}.

---

##### `timeCreatedGreaterThanOrEqualTo`<sup>Optional</sup> <a name="timeCreatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.Initializer.parameter.timeCreatedGreaterThanOrEqualTo"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_alert_policies#time_created_greater_than_or_equal_to DataOciDataSafeAlertPolicies#time_created_greater_than_or_equal_to}.

---

##### `timeCreatedLessThan`<sup>Optional</sup> <a name="timeCreatedLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.Initializer.parameter.timeCreatedLessThan"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_alert_policies#time_created_less_than DataOciDataSafeAlertPolicies#time_created_less_than}.

---

##### `type`<sup>Optional</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_alert_policies#type DataOciDataSafeAlertPolicies#type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.resetAccessLevel">resetAccessLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.resetAlertPolicyId">resetAlertPolicyId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.resetCompartmentIdInSubtree">resetCompartmentIdInSubtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.resetIsUserDefined">resetIsUserDefined</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.resetState">resetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.resetTimeCreatedGreaterThanOrEqualTo">resetTimeCreatedGreaterThanOrEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.resetTimeCreatedLessThan">resetTimeCreatedLessThan</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciDataSafeAlertPoliciesFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesFilter">DataOciDataSafeAlertPoliciesFilter</a>>

---

##### `resetAccessLevel` <a name="resetAccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.resetAccessLevel"></a>

```java
public void resetAccessLevel()
```

##### `resetAlertPolicyId` <a name="resetAlertPolicyId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.resetAlertPolicyId"></a>

```java
public void resetAlertPolicyId()
```

##### `resetCompartmentIdInSubtree` <a name="resetCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.resetCompartmentIdInSubtree"></a>

```java
public void resetCompartmentIdInSubtree()
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.resetId"></a>

```java
public void resetId()
```

##### `resetIsUserDefined` <a name="resetIsUserDefined" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.resetIsUserDefined"></a>

```java
public void resetIsUserDefined()
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.resetState"></a>

```java
public void resetState()
```

##### `resetTimeCreatedGreaterThanOrEqualTo` <a name="resetTimeCreatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.resetTimeCreatedGreaterThanOrEqualTo"></a>

```java
public void resetTimeCreatedGreaterThanOrEqualTo()
```

##### `resetTimeCreatedLessThan` <a name="resetTimeCreatedLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.resetTimeCreatedLessThan"></a>

```java
public void resetTimeCreatedLessThan()
```

##### `resetType` <a name="resetType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.resetType"></a>

```java
public void resetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeAlertPolicies resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_alert_policies.DataOciDataSafeAlertPolicies;

DataOciDataSafeAlertPolicies.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_alert_policies.DataOciDataSafeAlertPolicies;

DataOciDataSafeAlertPolicies.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_alert_policies.DataOciDataSafeAlertPolicies;

DataOciDataSafeAlertPolicies.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_alert_policies.DataOciDataSafeAlertPolicies;

DataOciDataSafeAlertPolicies.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciDataSafeAlertPolicies.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciDataSafeAlertPolicies resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciDataSafeAlertPolicies to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciDataSafeAlertPolicies that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_alert_policies#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeAlertPolicies to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.property.alertPolicyCollection">alertPolicyCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionList">DataOciDataSafeAlertPoliciesAlertPolicyCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesFilterList">DataOciDataSafeAlertPoliciesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.property.accessLevelInput">accessLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.property.alertPolicyIdInput">alertPolicyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.property.compartmentIdInSubtreeInput">compartmentIdInSubtreeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesFilter">DataOciDataSafeAlertPoliciesFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.property.isUserDefinedInput">isUserDefinedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.property.timeCreatedGreaterThanOrEqualToInput">timeCreatedGreaterThanOrEqualToInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.property.timeCreatedLessThanInput">timeCreatedLessThanInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.property.accessLevel">accessLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.property.alertPolicyId">alertPolicyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.property.isUserDefined">isUserDefined</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.property.timeCreatedGreaterThanOrEqualTo">timeCreatedGreaterThanOrEqualTo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.property.timeCreatedLessThan">timeCreatedLessThan</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `alertPolicyCollection`<sup>Required</sup> <a name="alertPolicyCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.property.alertPolicyCollection"></a>

```java
public DataOciDataSafeAlertPoliciesAlertPolicyCollectionList getAlertPolicyCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionList">DataOciDataSafeAlertPoliciesAlertPolicyCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.property.filter"></a>

```java
public DataOciDataSafeAlertPoliciesFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesFilterList">DataOciDataSafeAlertPoliciesFilterList</a>

---

##### `accessLevelInput`<sup>Optional</sup> <a name="accessLevelInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.property.accessLevelInput"></a>

```java
public java.lang.String getAccessLevelInput();
```

- *Type:* java.lang.String

---

##### `alertPolicyIdInput`<sup>Optional</sup> <a name="alertPolicyIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.property.alertPolicyIdInput"></a>

```java
public java.lang.String getAlertPolicyIdInput();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `compartmentIdInSubtreeInput`<sup>Optional</sup> <a name="compartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.property.compartmentIdInSubtreeInput"></a>

```java
public java.lang.Object getCompartmentIdInSubtreeInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesFilter">DataOciDataSafeAlertPoliciesFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `isUserDefinedInput`<sup>Optional</sup> <a name="isUserDefinedInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.property.isUserDefinedInput"></a>

```java
public java.lang.Object getIsUserDefinedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `timeCreatedGreaterThanOrEqualToInput`<sup>Optional</sup> <a name="timeCreatedGreaterThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.property.timeCreatedGreaterThanOrEqualToInput"></a>

```java
public java.lang.String getTimeCreatedGreaterThanOrEqualToInput();
```

- *Type:* java.lang.String

---

##### `timeCreatedLessThanInput`<sup>Optional</sup> <a name="timeCreatedLessThanInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.property.timeCreatedLessThanInput"></a>

```java
public java.lang.String getTimeCreatedLessThanInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `accessLevel`<sup>Required</sup> <a name="accessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.property.accessLevel"></a>

```java
public java.lang.String getAccessLevel();
```

- *Type:* java.lang.String

---

##### `alertPolicyId`<sup>Required</sup> <a name="alertPolicyId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.property.alertPolicyId"></a>

```java
public java.lang.String getAlertPolicyId();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `compartmentIdInSubtree`<sup>Required</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.property.compartmentIdInSubtree"></a>

```java
public java.lang.Object getCompartmentIdInSubtree();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isUserDefined`<sup>Required</sup> <a name="isUserDefined" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.property.isUserDefined"></a>

```java
public java.lang.Object getIsUserDefined();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeCreatedGreaterThanOrEqualTo`<sup>Required</sup> <a name="timeCreatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.property.timeCreatedGreaterThanOrEqualTo"></a>

```java
public java.lang.String getTimeCreatedGreaterThanOrEqualTo();
```

- *Type:* java.lang.String

---

##### `timeCreatedLessThan`<sup>Required</sup> <a name="timeCreatedLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.property.timeCreatedLessThan"></a>

```java
public java.lang.String getTimeCreatedLessThan();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPolicies.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeAlertPoliciesAlertPolicyCollection <a name="DataOciDataSafeAlertPoliciesAlertPolicyCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_alert_policies.DataOciDataSafeAlertPoliciesAlertPolicyCollection;

DataOciDataSafeAlertPoliciesAlertPolicyCollection.builder()
    .build();
```


### DataOciDataSafeAlertPoliciesAlertPolicyCollectionItems <a name="DataOciDataSafeAlertPoliciesAlertPolicyCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_alert_policies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItems;

DataOciDataSafeAlertPoliciesAlertPolicyCollectionItems.builder()
    .build();
```


### DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsAlertPolicyRuleDetails <a name="DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsAlertPolicyRuleDetails" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsAlertPolicyRuleDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsAlertPolicyRuleDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_alert_policies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsAlertPolicyRuleDetails;

DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsAlertPolicyRuleDetails.builder()
    .build();
```


### DataOciDataSafeAlertPoliciesConfig <a name="DataOciDataSafeAlertPoliciesConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_alert_policies.DataOciDataSafeAlertPoliciesConfig;

DataOciDataSafeAlertPoliciesConfig.builder()
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
//  .accessLevel(java.lang.String)
//  .alertPolicyId(java.lang.String)
//  .compartmentIdInSubtree(java.lang.Boolean)
//  .compartmentIdInSubtree(IResolvable)
//  .displayName(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciDataSafeAlertPoliciesFilter>)
//  .id(java.lang.String)
//  .isUserDefined(java.lang.Boolean)
//  .isUserDefined(IResolvable)
//  .state(java.lang.String)
//  .timeCreatedGreaterThanOrEqualTo(java.lang.String)
//  .timeCreatedLessThan(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_alert_policies#compartment_id DataOciDataSafeAlertPolicies#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesConfig.property.accessLevel">accessLevel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_alert_policies#access_level DataOciDataSafeAlertPolicies#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesConfig.property.alertPolicyId">alertPolicyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_alert_policies#alert_policy_id DataOciDataSafeAlertPolicies#alert_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesConfig.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_alert_policies#compartment_id_in_subtree DataOciDataSafeAlertPolicies#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_alert_policies#display_name DataOciDataSafeAlertPolicies#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesFilter">DataOciDataSafeAlertPoliciesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_alert_policies#id DataOciDataSafeAlertPolicies#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesConfig.property.isUserDefined">isUserDefined</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_alert_policies#is_user_defined DataOciDataSafeAlertPolicies#is_user_defined}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesConfig.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_alert_policies#state DataOciDataSafeAlertPolicies#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesConfig.property.timeCreatedGreaterThanOrEqualTo">timeCreatedGreaterThanOrEqualTo</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_alert_policies#time_created_greater_than_or_equal_to DataOciDataSafeAlertPolicies#time_created_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesConfig.property.timeCreatedLessThan">timeCreatedLessThan</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_alert_policies#time_created_less_than DataOciDataSafeAlertPolicies#time_created_less_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesConfig.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_alert_policies#type DataOciDataSafeAlertPolicies#type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_alert_policies#compartment_id DataOciDataSafeAlertPolicies#compartment_id}.

---

##### `accessLevel`<sup>Optional</sup> <a name="accessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesConfig.property.accessLevel"></a>

```java
public java.lang.String getAccessLevel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_alert_policies#access_level DataOciDataSafeAlertPolicies#access_level}.

---

##### `alertPolicyId`<sup>Optional</sup> <a name="alertPolicyId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesConfig.property.alertPolicyId"></a>

```java
public java.lang.String getAlertPolicyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_alert_policies#alert_policy_id DataOciDataSafeAlertPolicies#alert_policy_id}.

---

##### `compartmentIdInSubtree`<sup>Optional</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesConfig.property.compartmentIdInSubtree"></a>

```java
public java.lang.Object getCompartmentIdInSubtree();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_alert_policies#compartment_id_in_subtree DataOciDataSafeAlertPolicies#compartment_id_in_subtree}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_alert_policies#display_name DataOciDataSafeAlertPolicies#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesFilter">DataOciDataSafeAlertPoliciesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_alert_policies#filter DataOciDataSafeAlertPolicies#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_alert_policies#id DataOciDataSafeAlertPolicies#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isUserDefined`<sup>Optional</sup> <a name="isUserDefined" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesConfig.property.isUserDefined"></a>

```java
public java.lang.Object getIsUserDefined();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_alert_policies#is_user_defined DataOciDataSafeAlertPolicies#is_user_defined}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_alert_policies#state DataOciDataSafeAlertPolicies#state}.

---

##### `timeCreatedGreaterThanOrEqualTo`<sup>Optional</sup> <a name="timeCreatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesConfig.property.timeCreatedGreaterThanOrEqualTo"></a>

```java
public java.lang.String getTimeCreatedGreaterThanOrEqualTo();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_alert_policies#time_created_greater_than_or_equal_to DataOciDataSafeAlertPolicies#time_created_greater_than_or_equal_to}.

---

##### `timeCreatedLessThan`<sup>Optional</sup> <a name="timeCreatedLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesConfig.property.timeCreatedLessThan"></a>

```java
public java.lang.String getTimeCreatedLessThan();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_alert_policies#time_created_less_than DataOciDataSafeAlertPolicies#time_created_less_than}.

---

##### `type`<sup>Optional</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_alert_policies#type DataOciDataSafeAlertPolicies#type}.

---

### DataOciDataSafeAlertPoliciesFilter <a name="DataOciDataSafeAlertPoliciesFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_alert_policies.DataOciDataSafeAlertPoliciesFilter;

DataOciDataSafeAlertPoliciesFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_alert_policies#name DataOciDataSafeAlertPolicies#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_alert_policies#values DataOciDataSafeAlertPolicies#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_alert_policies#regex DataOciDataSafeAlertPolicies#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_alert_policies#name DataOciDataSafeAlertPolicies#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_alert_policies#values DataOciDataSafeAlertPolicies#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_alert_policies#regex DataOciDataSafeAlertPolicies#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsAlertPolicyRuleDetailsList <a name="DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsAlertPolicyRuleDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsAlertPolicyRuleDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsAlertPolicyRuleDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_alert_policies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsAlertPolicyRuleDetailsList;

new DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsAlertPolicyRuleDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsAlertPolicyRuleDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsAlertPolicyRuleDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsAlertPolicyRuleDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsAlertPolicyRuleDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsAlertPolicyRuleDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsAlertPolicyRuleDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsAlertPolicyRuleDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsAlertPolicyRuleDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsAlertPolicyRuleDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsAlertPolicyRuleDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsAlertPolicyRuleDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsAlertPolicyRuleDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsAlertPolicyRuleDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsAlertPolicyRuleDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsAlertPolicyRuleDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsAlertPolicyRuleDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsAlertPolicyRuleDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsAlertPolicyRuleDetailsList.get"></a>

```java
public DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsAlertPolicyRuleDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsAlertPolicyRuleDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsAlertPolicyRuleDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsAlertPolicyRuleDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsAlertPolicyRuleDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsAlertPolicyRuleDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsAlertPolicyRuleDetailsOutputReference <a name="DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsAlertPolicyRuleDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsAlertPolicyRuleDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsAlertPolicyRuleDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_alert_policies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsAlertPolicyRuleDetailsOutputReference;

new DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsAlertPolicyRuleDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsAlertPolicyRuleDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsAlertPolicyRuleDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsAlertPolicyRuleDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsAlertPolicyRuleDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsAlertPolicyRuleDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsAlertPolicyRuleDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsAlertPolicyRuleDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsAlertPolicyRuleDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsAlertPolicyRuleDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsAlertPolicyRuleDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsAlertPolicyRuleDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsAlertPolicyRuleDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsAlertPolicyRuleDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsAlertPolicyRuleDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsAlertPolicyRuleDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsAlertPolicyRuleDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsAlertPolicyRuleDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsAlertPolicyRuleDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsAlertPolicyRuleDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsAlertPolicyRuleDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsAlertPolicyRuleDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsAlertPolicyRuleDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsAlertPolicyRuleDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsAlertPolicyRuleDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsAlertPolicyRuleDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsAlertPolicyRuleDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsAlertPolicyRuleDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsAlertPolicyRuleDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsAlertPolicyRuleDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsAlertPolicyRuleDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsAlertPolicyRuleDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsAlertPolicyRuleDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsAlertPolicyRuleDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsAlertPolicyRuleDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsAlertPolicyRuleDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsAlertPolicyRuleDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsAlertPolicyRuleDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsAlertPolicyRuleDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsAlertPolicyRuleDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsAlertPolicyRuleDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsAlertPolicyRuleDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsAlertPolicyRuleDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsAlertPolicyRuleDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsAlertPolicyRuleDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsAlertPolicyRuleDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsAlertPolicyRuleDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsAlertPolicyRuleDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsAlertPolicyRuleDetailsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsAlertPolicyRuleDetailsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsAlertPolicyRuleDetailsOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsAlertPolicyRuleDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsAlertPolicyRuleDetails">DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsAlertPolicyRuleDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsAlertPolicyRuleDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsAlertPolicyRuleDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsAlertPolicyRuleDetailsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsAlertPolicyRuleDetailsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsAlertPolicyRuleDetailsOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsAlertPolicyRuleDetailsOutputReference.property.internalValue"></a>

```java
public DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsAlertPolicyRuleDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsAlertPolicyRuleDetails">DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsAlertPolicyRuleDetails</a>

---


### DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsList <a name="DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_alert_policies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsList;

new DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsList.get"></a>

```java
public DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsOutputReference <a name="DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_alert_policies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsOutputReference;

new DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsOutputReference.property.alertPolicyRuleDetails">alertPolicyRuleDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsAlertPolicyRuleDetailsList">DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsAlertPolicyRuleDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsOutputReference.property.alertPolicyType">alertPolicyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsOutputReference.property.isUserDefined">isUserDefined</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsOutputReference.property.severity">severity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItems">DataOciDataSafeAlertPoliciesAlertPolicyCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `alertPolicyRuleDetails`<sup>Required</sup> <a name="alertPolicyRuleDetails" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsOutputReference.property.alertPolicyRuleDetails"></a>

```java
public DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsAlertPolicyRuleDetailsList getAlertPolicyRuleDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsAlertPolicyRuleDetailsList">DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsAlertPolicyRuleDetailsList</a>

---

##### `alertPolicyType`<sup>Required</sup> <a name="alertPolicyType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsOutputReference.property.alertPolicyType"></a>

```java
public java.lang.String getAlertPolicyType();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsOutputReference.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsOutputReference.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isUserDefined`<sup>Required</sup> <a name="isUserDefined" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsOutputReference.property.isUserDefined"></a>

```java
public IResolvable getIsUserDefined();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsOutputReference.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `severity`<sup>Required</sup> <a name="severity" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsOutputReference.property.severity"></a>

```java
public java.lang.String getSeverity();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsOutputReference.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsOutputReference.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsOutputReference.property.internalValue"></a>

```java
public DataOciDataSafeAlertPoliciesAlertPolicyCollectionItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItems">DataOciDataSafeAlertPoliciesAlertPolicyCollectionItems</a>

---


### DataOciDataSafeAlertPoliciesAlertPolicyCollectionList <a name="DataOciDataSafeAlertPoliciesAlertPolicyCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_alert_policies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionList;

new DataOciDataSafeAlertPoliciesAlertPolicyCollectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionList.get"></a>

```java
public DataOciDataSafeAlertPoliciesAlertPolicyCollectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDataSafeAlertPoliciesAlertPolicyCollectionOutputReference <a name="DataOciDataSafeAlertPoliciesAlertPolicyCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_alert_policies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionOutputReference;

new DataOciDataSafeAlertPoliciesAlertPolicyCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsList">DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollection">DataOciDataSafeAlertPoliciesAlertPolicyCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionOutputReference.property.items"></a>

```java
public DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsList">DataOciDataSafeAlertPoliciesAlertPolicyCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollectionOutputReference.property.internalValue"></a>

```java
public DataOciDataSafeAlertPoliciesAlertPolicyCollection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesAlertPolicyCollection">DataOciDataSafeAlertPoliciesAlertPolicyCollection</a>

---


### DataOciDataSafeAlertPoliciesFilterList <a name="DataOciDataSafeAlertPoliciesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_alert_policies.DataOciDataSafeAlertPoliciesFilterList;

new DataOciDataSafeAlertPoliciesFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesFilterList.get"></a>

```java
public DataOciDataSafeAlertPoliciesFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesFilter">DataOciDataSafeAlertPoliciesFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesFilter">DataOciDataSafeAlertPoliciesFilter</a>>

---


### DataOciDataSafeAlertPoliciesFilterOutputReference <a name="DataOciDataSafeAlertPoliciesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_alert_policies.DataOciDataSafeAlertPoliciesFilterOutputReference;

new DataOciDataSafeAlertPoliciesFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesFilter">DataOciDataSafeAlertPoliciesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAlertPolicies.DataOciDataSafeAlertPoliciesFilter">DataOciDataSafeAlertPoliciesFilter</a>

---



