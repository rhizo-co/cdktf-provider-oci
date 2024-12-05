# `loadBalancerLoadBalancer` Submodule <a name="`loadBalancerLoadBalancer` Submodule" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LoadBalancerLoadBalancer <a name="LoadBalancerLoadBalancer" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer oci_load_balancer_load_balancer}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.load_balancer_load_balancer.LoadBalancerLoadBalancer;

LoadBalancerLoadBalancer.Builder.create(Construct scope, java.lang.String id)
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
    .displayName(java.lang.String)
    .shape(java.lang.String)
    .subnetIds(java.util.List<java.lang.String>)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .ipMode(java.lang.String)
//  .isDeleteProtectionEnabled(java.lang.Boolean)
//  .isDeleteProtectionEnabled(IResolvable)
//  .isPrivate(java.lang.Boolean)
//  .isPrivate(IResolvable)
//  .isRequestIdEnabled(java.lang.Boolean)
//  .isRequestIdEnabled(IResolvable)
//  .networkSecurityGroupIds(java.util.List<java.lang.String>)
//  .requestIdHeader(java.lang.String)
//  .reservedIps(IResolvable)
//  .reservedIps(java.util.List<LoadBalancerLoadBalancerReservedIps>)
//  .shapeDetails(LoadBalancerLoadBalancerShapeDetails)
//  .timeouts(LoadBalancerLoadBalancerTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#compartment_id LoadBalancerLoadBalancer#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#display_name LoadBalancerLoadBalancer#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.Initializer.parameter.shape">shape</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#shape LoadBalancerLoadBalancer#shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.Initializer.parameter.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#subnet_ids LoadBalancerLoadBalancer#subnet_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#defined_tags LoadBalancerLoadBalancer#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#freeform_tags LoadBalancerLoadBalancer#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#id LoadBalancerLoadBalancer#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.Initializer.parameter.ipMode">ipMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#ip_mode LoadBalancerLoadBalancer#ip_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.Initializer.parameter.isDeleteProtectionEnabled">isDeleteProtectionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#is_delete_protection_enabled LoadBalancerLoadBalancer#is_delete_protection_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.Initializer.parameter.isPrivate">isPrivate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#is_private LoadBalancerLoadBalancer#is_private}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.Initializer.parameter.isRequestIdEnabled">isRequestIdEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#is_request_id_enabled LoadBalancerLoadBalancer#is_request_id_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.Initializer.parameter.networkSecurityGroupIds">networkSecurityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#network_security_group_ids LoadBalancerLoadBalancer#network_security_group_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.Initializer.parameter.requestIdHeader">requestIdHeader</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#request_id_header LoadBalancerLoadBalancer#request_id_header}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.Initializer.parameter.reservedIps">reservedIps</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIps">LoadBalancerLoadBalancerReservedIps</a>></code> | reserved_ips block. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.Initializer.parameter.shapeDetails">shapeDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetails">LoadBalancerLoadBalancerShapeDetails</a></code> | shape_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeouts">LoadBalancerLoadBalancerTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#compartment_id LoadBalancerLoadBalancer#compartment_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#display_name LoadBalancerLoadBalancer#display_name}.

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.Initializer.parameter.shape"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#shape LoadBalancerLoadBalancer#shape}.

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.Initializer.parameter.subnetIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#subnet_ids LoadBalancerLoadBalancer#subnet_ids}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#defined_tags LoadBalancerLoadBalancer#defined_tags}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#freeform_tags LoadBalancerLoadBalancer#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#id LoadBalancerLoadBalancer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipMode`<sup>Optional</sup> <a name="ipMode" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.Initializer.parameter.ipMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#ip_mode LoadBalancerLoadBalancer#ip_mode}.

---

##### `isDeleteProtectionEnabled`<sup>Optional</sup> <a name="isDeleteProtectionEnabled" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.Initializer.parameter.isDeleteProtectionEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#is_delete_protection_enabled LoadBalancerLoadBalancer#is_delete_protection_enabled}.

---

##### `isPrivate`<sup>Optional</sup> <a name="isPrivate" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.Initializer.parameter.isPrivate"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#is_private LoadBalancerLoadBalancer#is_private}.

---

##### `isRequestIdEnabled`<sup>Optional</sup> <a name="isRequestIdEnabled" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.Initializer.parameter.isRequestIdEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#is_request_id_enabled LoadBalancerLoadBalancer#is_request_id_enabled}.

---

##### `networkSecurityGroupIds`<sup>Optional</sup> <a name="networkSecurityGroupIds" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.Initializer.parameter.networkSecurityGroupIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#network_security_group_ids LoadBalancerLoadBalancer#network_security_group_ids}.

---

##### `requestIdHeader`<sup>Optional</sup> <a name="requestIdHeader" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.Initializer.parameter.requestIdHeader"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#request_id_header LoadBalancerLoadBalancer#request_id_header}.

---

##### `reservedIps`<sup>Optional</sup> <a name="reservedIps" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.Initializer.parameter.reservedIps"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIps">LoadBalancerLoadBalancerReservedIps</a>>

reserved_ips block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#reserved_ips LoadBalancerLoadBalancer#reserved_ips}

---

##### `shapeDetails`<sup>Optional</sup> <a name="shapeDetails" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.Initializer.parameter.shapeDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetails">LoadBalancerLoadBalancerShapeDetails</a>

shape_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#shape_details LoadBalancerLoadBalancer#shape_details}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeouts">LoadBalancerLoadBalancerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#timeouts LoadBalancerLoadBalancer#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.putReservedIps">putReservedIps</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.putShapeDetails">putShapeDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.resetIpMode">resetIpMode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.resetIsDeleteProtectionEnabled">resetIsDeleteProtectionEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.resetIsPrivate">resetIsPrivate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.resetIsRequestIdEnabled">resetIsRequestIdEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.resetNetworkSecurityGroupIds">resetNetworkSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.resetRequestIdHeader">resetRequestIdHeader</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.resetReservedIps">resetReservedIps</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.resetShapeDetails">resetShapeDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putReservedIps` <a name="putReservedIps" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.putReservedIps"></a>

```java
public void putReservedIps(IResolvable OR java.util.List<LoadBalancerLoadBalancerReservedIps> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.putReservedIps.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIps">LoadBalancerLoadBalancerReservedIps</a>>

---

##### `putShapeDetails` <a name="putShapeDetails" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.putShapeDetails"></a>

```java
public void putShapeDetails(LoadBalancerLoadBalancerShapeDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.putShapeDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetails">LoadBalancerLoadBalancerShapeDetails</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.putTimeouts"></a>

```java
public void putTimeouts(LoadBalancerLoadBalancerTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeouts">LoadBalancerLoadBalancerTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.resetId"></a>

```java
public void resetId()
```

##### `resetIpMode` <a name="resetIpMode" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.resetIpMode"></a>

```java
public void resetIpMode()
```

##### `resetIsDeleteProtectionEnabled` <a name="resetIsDeleteProtectionEnabled" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.resetIsDeleteProtectionEnabled"></a>

```java
public void resetIsDeleteProtectionEnabled()
```

##### `resetIsPrivate` <a name="resetIsPrivate" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.resetIsPrivate"></a>

```java
public void resetIsPrivate()
```

##### `resetIsRequestIdEnabled` <a name="resetIsRequestIdEnabled" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.resetIsRequestIdEnabled"></a>

```java
public void resetIsRequestIdEnabled()
```

##### `resetNetworkSecurityGroupIds` <a name="resetNetworkSecurityGroupIds" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.resetNetworkSecurityGroupIds"></a>

```java
public void resetNetworkSecurityGroupIds()
```

##### `resetRequestIdHeader` <a name="resetRequestIdHeader" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.resetRequestIdHeader"></a>

```java
public void resetRequestIdHeader()
```

##### `resetReservedIps` <a name="resetReservedIps" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.resetReservedIps"></a>

```java
public void resetReservedIps()
```

##### `resetShapeDetails` <a name="resetShapeDetails" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.resetShapeDetails"></a>

```java
public void resetShapeDetails()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a LoadBalancerLoadBalancer resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.load_balancer_load_balancer.LoadBalancerLoadBalancer;

LoadBalancerLoadBalancer.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.load_balancer_load_balancer.LoadBalancerLoadBalancer;

LoadBalancerLoadBalancer.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.load_balancer_load_balancer.LoadBalancerLoadBalancer;

LoadBalancerLoadBalancer.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.load_balancer_load_balancer.LoadBalancerLoadBalancer;

LoadBalancerLoadBalancer.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),LoadBalancerLoadBalancer.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a LoadBalancerLoadBalancer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the LoadBalancerLoadBalancer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing LoadBalancerLoadBalancer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the LoadBalancerLoadBalancer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.ipAddressDetails">ipAddressDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsList">LoadBalancerLoadBalancerIpAddressDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.ipAddresses">ipAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.reservedIps">reservedIps</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsList">LoadBalancerLoadBalancerReservedIpsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.shapeDetails">shapeDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference">LoadBalancerLoadBalancerShapeDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference">LoadBalancerLoadBalancerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.ipModeInput">ipModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.isDeleteProtectionEnabledInput">isDeleteProtectionEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.isPrivateInput">isPrivateInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.isRequestIdEnabledInput">isRequestIdEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.networkSecurityGroupIdsInput">networkSecurityGroupIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.requestIdHeaderInput">requestIdHeaderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.reservedIpsInput">reservedIpsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIps">LoadBalancerLoadBalancerReservedIps</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.shapeDetailsInput">shapeDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetails">LoadBalancerLoadBalancerShapeDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.shapeInput">shapeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.subnetIdsInput">subnetIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeouts">LoadBalancerLoadBalancerTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.ipMode">ipMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.isDeleteProtectionEnabled">isDeleteProtectionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.isPrivate">isPrivate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.isRequestIdEnabled">isRequestIdEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.networkSecurityGroupIds">networkSecurityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.requestIdHeader">requestIdHeader</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.shape">shape</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `ipAddressDetails`<sup>Required</sup> <a name="ipAddressDetails" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.ipAddressDetails"></a>

```java
public LoadBalancerLoadBalancerIpAddressDetailsList getIpAddressDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsList">LoadBalancerLoadBalancerIpAddressDetailsList</a>

---

##### `ipAddresses`<sup>Required</sup> <a name="ipAddresses" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.ipAddresses"></a>

```java
public java.util.List<java.lang.String> getIpAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `reservedIps`<sup>Required</sup> <a name="reservedIps" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.reservedIps"></a>

```java
public LoadBalancerLoadBalancerReservedIpsList getReservedIps();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsList">LoadBalancerLoadBalancerReservedIpsList</a>

---

##### `shapeDetails`<sup>Required</sup> <a name="shapeDetails" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.shapeDetails"></a>

```java
public LoadBalancerLoadBalancerShapeDetailsOutputReference getShapeDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference">LoadBalancerLoadBalancerShapeDetailsOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.timeouts"></a>

```java
public LoadBalancerLoadBalancerTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference">LoadBalancerLoadBalancerTimeoutsOutputReference</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ipModeInput`<sup>Optional</sup> <a name="ipModeInput" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.ipModeInput"></a>

```java
public java.lang.String getIpModeInput();
```

- *Type:* java.lang.String

---

##### `isDeleteProtectionEnabledInput`<sup>Optional</sup> <a name="isDeleteProtectionEnabledInput" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.isDeleteProtectionEnabledInput"></a>

```java
public java.lang.Object getIsDeleteProtectionEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isPrivateInput`<sup>Optional</sup> <a name="isPrivateInput" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.isPrivateInput"></a>

```java
public java.lang.Object getIsPrivateInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isRequestIdEnabledInput`<sup>Optional</sup> <a name="isRequestIdEnabledInput" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.isRequestIdEnabledInput"></a>

```java
public java.lang.Object getIsRequestIdEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `networkSecurityGroupIdsInput`<sup>Optional</sup> <a name="networkSecurityGroupIdsInput" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.networkSecurityGroupIdsInput"></a>

```java
public java.util.List<java.lang.String> getNetworkSecurityGroupIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `requestIdHeaderInput`<sup>Optional</sup> <a name="requestIdHeaderInput" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.requestIdHeaderInput"></a>

```java
public java.lang.String getRequestIdHeaderInput();
```

- *Type:* java.lang.String

---

##### `reservedIpsInput`<sup>Optional</sup> <a name="reservedIpsInput" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.reservedIpsInput"></a>

```java
public java.lang.Object getReservedIpsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIps">LoadBalancerLoadBalancerReservedIps</a>>

---

##### `shapeDetailsInput`<sup>Optional</sup> <a name="shapeDetailsInput" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.shapeDetailsInput"></a>

```java
public LoadBalancerLoadBalancerShapeDetails getShapeDetailsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetails">LoadBalancerLoadBalancerShapeDetails</a>

---

##### `shapeInput`<sup>Optional</sup> <a name="shapeInput" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.shapeInput"></a>

```java
public java.lang.String getShapeInput();
```

- *Type:* java.lang.String

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.subnetIdsInput"></a>

```java
public java.util.List<java.lang.String> getSubnetIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeouts">LoadBalancerLoadBalancerTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ipMode`<sup>Required</sup> <a name="ipMode" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.ipMode"></a>

```java
public java.lang.String getIpMode();
```

- *Type:* java.lang.String

---

##### `isDeleteProtectionEnabled`<sup>Required</sup> <a name="isDeleteProtectionEnabled" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.isDeleteProtectionEnabled"></a>

```java
public java.lang.Object getIsDeleteProtectionEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isPrivate`<sup>Required</sup> <a name="isPrivate" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.isPrivate"></a>

```java
public java.lang.Object getIsPrivate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isRequestIdEnabled`<sup>Required</sup> <a name="isRequestIdEnabled" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.isRequestIdEnabled"></a>

```java
public java.lang.Object getIsRequestIdEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `networkSecurityGroupIds`<sup>Required</sup> <a name="networkSecurityGroupIds" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.networkSecurityGroupIds"></a>

```java
public java.util.List<java.lang.String> getNetworkSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `requestIdHeader`<sup>Required</sup> <a name="requestIdHeader" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.requestIdHeader"></a>

```java
public java.lang.String getRequestIdHeader();
```

- *Type:* java.lang.String

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.shape"></a>

```java
public java.lang.String getShape();
```

- *Type:* java.lang.String

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancer.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LoadBalancerLoadBalancerConfig <a name="LoadBalancerLoadBalancerConfig" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.load_balancer_load_balancer.LoadBalancerLoadBalancerConfig;

LoadBalancerLoadBalancerConfig.builder()
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
    .displayName(java.lang.String)
    .shape(java.lang.String)
    .subnetIds(java.util.List<java.lang.String>)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .ipMode(java.lang.String)
//  .isDeleteProtectionEnabled(java.lang.Boolean)
//  .isDeleteProtectionEnabled(IResolvable)
//  .isPrivate(java.lang.Boolean)
//  .isPrivate(IResolvable)
//  .isRequestIdEnabled(java.lang.Boolean)
//  .isRequestIdEnabled(IResolvable)
//  .networkSecurityGroupIds(java.util.List<java.lang.String>)
//  .requestIdHeader(java.lang.String)
//  .reservedIps(IResolvable)
//  .reservedIps(java.util.List<LoadBalancerLoadBalancerReservedIps>)
//  .shapeDetails(LoadBalancerLoadBalancerShapeDetails)
//  .timeouts(LoadBalancerLoadBalancerTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#compartment_id LoadBalancerLoadBalancer#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#display_name LoadBalancerLoadBalancer#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.shape">shape</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#shape LoadBalancerLoadBalancer#shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#subnet_ids LoadBalancerLoadBalancer#subnet_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#defined_tags LoadBalancerLoadBalancer#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#freeform_tags LoadBalancerLoadBalancer#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#id LoadBalancerLoadBalancer#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.ipMode">ipMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#ip_mode LoadBalancerLoadBalancer#ip_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.isDeleteProtectionEnabled">isDeleteProtectionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#is_delete_protection_enabled LoadBalancerLoadBalancer#is_delete_protection_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.isPrivate">isPrivate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#is_private LoadBalancerLoadBalancer#is_private}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.isRequestIdEnabled">isRequestIdEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#is_request_id_enabled LoadBalancerLoadBalancer#is_request_id_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.networkSecurityGroupIds">networkSecurityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#network_security_group_ids LoadBalancerLoadBalancer#network_security_group_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.requestIdHeader">requestIdHeader</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#request_id_header LoadBalancerLoadBalancer#request_id_header}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.reservedIps">reservedIps</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIps">LoadBalancerLoadBalancerReservedIps</a>></code> | reserved_ips block. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.shapeDetails">shapeDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetails">LoadBalancerLoadBalancerShapeDetails</a></code> | shape_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeouts">LoadBalancerLoadBalancerTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#compartment_id LoadBalancerLoadBalancer#compartment_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#display_name LoadBalancerLoadBalancer#display_name}.

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.shape"></a>

```java
public java.lang.String getShape();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#shape LoadBalancerLoadBalancer#shape}.

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#subnet_ids LoadBalancerLoadBalancer#subnet_ids}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#defined_tags LoadBalancerLoadBalancer#defined_tags}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#freeform_tags LoadBalancerLoadBalancer#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#id LoadBalancerLoadBalancer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipMode`<sup>Optional</sup> <a name="ipMode" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.ipMode"></a>

```java
public java.lang.String getIpMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#ip_mode LoadBalancerLoadBalancer#ip_mode}.

---

##### `isDeleteProtectionEnabled`<sup>Optional</sup> <a name="isDeleteProtectionEnabled" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.isDeleteProtectionEnabled"></a>

```java
public java.lang.Object getIsDeleteProtectionEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#is_delete_protection_enabled LoadBalancerLoadBalancer#is_delete_protection_enabled}.

---

##### `isPrivate`<sup>Optional</sup> <a name="isPrivate" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.isPrivate"></a>

```java
public java.lang.Object getIsPrivate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#is_private LoadBalancerLoadBalancer#is_private}.

---

##### `isRequestIdEnabled`<sup>Optional</sup> <a name="isRequestIdEnabled" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.isRequestIdEnabled"></a>

```java
public java.lang.Object getIsRequestIdEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#is_request_id_enabled LoadBalancerLoadBalancer#is_request_id_enabled}.

---

##### `networkSecurityGroupIds`<sup>Optional</sup> <a name="networkSecurityGroupIds" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.networkSecurityGroupIds"></a>

```java
public java.util.List<java.lang.String> getNetworkSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#network_security_group_ids LoadBalancerLoadBalancer#network_security_group_ids}.

---

##### `requestIdHeader`<sup>Optional</sup> <a name="requestIdHeader" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.requestIdHeader"></a>

```java
public java.lang.String getRequestIdHeader();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#request_id_header LoadBalancerLoadBalancer#request_id_header}.

---

##### `reservedIps`<sup>Optional</sup> <a name="reservedIps" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.reservedIps"></a>

```java
public java.lang.Object getReservedIps();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIps">LoadBalancerLoadBalancerReservedIps</a>>

reserved_ips block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#reserved_ips LoadBalancerLoadBalancer#reserved_ips}

---

##### `shapeDetails`<sup>Optional</sup> <a name="shapeDetails" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.shapeDetails"></a>

```java
public LoadBalancerLoadBalancerShapeDetails getShapeDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetails">LoadBalancerLoadBalancerShapeDetails</a>

shape_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#shape_details LoadBalancerLoadBalancer#shape_details}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerConfig.property.timeouts"></a>

```java
public LoadBalancerLoadBalancerTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeouts">LoadBalancerLoadBalancerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#timeouts LoadBalancerLoadBalancer#timeouts}

---

### LoadBalancerLoadBalancerIpAddressDetails <a name="LoadBalancerLoadBalancerIpAddressDetails" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.load_balancer_load_balancer.LoadBalancerLoadBalancerIpAddressDetails;

LoadBalancerLoadBalancerIpAddressDetails.builder()
    .build();
```


### LoadBalancerLoadBalancerIpAddressDetailsReservedIp <a name="LoadBalancerLoadBalancerIpAddressDetailsReservedIp" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIp"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIp.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.load_balancer_load_balancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIp;

LoadBalancerLoadBalancerIpAddressDetailsReservedIp.builder()
    .build();
```


### LoadBalancerLoadBalancerReservedIps <a name="LoadBalancerLoadBalancerReservedIps" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIps"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIps.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.load_balancer_load_balancer.LoadBalancerLoadBalancerReservedIps;

LoadBalancerLoadBalancerReservedIps.builder()
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIps.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#id LoadBalancerLoadBalancer#id}. |

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIps.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#id LoadBalancerLoadBalancer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### LoadBalancerLoadBalancerShapeDetails <a name="LoadBalancerLoadBalancerShapeDetails" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.load_balancer_load_balancer.LoadBalancerLoadBalancerShapeDetails;

LoadBalancerLoadBalancerShapeDetails.builder()
    .maximumBandwidthInMbps(java.lang.Number)
    .minimumBandwidthInMbps(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetails.property.maximumBandwidthInMbps">maximumBandwidthInMbps</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#maximum_bandwidth_in_mbps LoadBalancerLoadBalancer#maximum_bandwidth_in_mbps}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetails.property.minimumBandwidthInMbps">minimumBandwidthInMbps</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#minimum_bandwidth_in_mbps LoadBalancerLoadBalancer#minimum_bandwidth_in_mbps}. |

---

##### `maximumBandwidthInMbps`<sup>Required</sup> <a name="maximumBandwidthInMbps" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetails.property.maximumBandwidthInMbps"></a>

```java
public java.lang.Number getMaximumBandwidthInMbps();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#maximum_bandwidth_in_mbps LoadBalancerLoadBalancer#maximum_bandwidth_in_mbps}.

---

##### `minimumBandwidthInMbps`<sup>Required</sup> <a name="minimumBandwidthInMbps" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetails.property.minimumBandwidthInMbps"></a>

```java
public java.lang.Number getMinimumBandwidthInMbps();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#minimum_bandwidth_in_mbps LoadBalancerLoadBalancer#minimum_bandwidth_in_mbps}.

---

### LoadBalancerLoadBalancerTimeouts <a name="LoadBalancerLoadBalancerTimeouts" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.load_balancer_load_balancer.LoadBalancerLoadBalancerTimeouts;

LoadBalancerLoadBalancerTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#create LoadBalancerLoadBalancer#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#delete LoadBalancerLoadBalancer#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#update LoadBalancerLoadBalancer#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#create LoadBalancerLoadBalancer#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#delete LoadBalancerLoadBalancer#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_load_balancer#update LoadBalancerLoadBalancer#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LoadBalancerLoadBalancerIpAddressDetailsList <a name="LoadBalancerLoadBalancerIpAddressDetailsList" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.load_balancer_load_balancer.LoadBalancerLoadBalancerIpAddressDetailsList;

new LoadBalancerLoadBalancerIpAddressDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsList.get"></a>

```java
public LoadBalancerLoadBalancerIpAddressDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### LoadBalancerLoadBalancerIpAddressDetailsOutputReference <a name="LoadBalancerLoadBalancerIpAddressDetailsOutputReference" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.load_balancer_load_balancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference;

new LoadBalancerLoadBalancerIpAddressDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.property.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.property.isPublic">isPublic</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.property.reservedIp">reservedIp</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpList">LoadBalancerLoadBalancerIpAddressDetailsReservedIpList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetails">LoadBalancerLoadBalancerIpAddressDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.property.ipAddress"></a>

```java
public java.lang.String getIpAddress();
```

- *Type:* java.lang.String

---

##### `isPublic`<sup>Required</sup> <a name="isPublic" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.property.isPublic"></a>

```java
public IResolvable getIsPublic();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `reservedIp`<sup>Required</sup> <a name="reservedIp" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.property.reservedIp"></a>

```java
public LoadBalancerLoadBalancerIpAddressDetailsReservedIpList getReservedIp();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpList">LoadBalancerLoadBalancerIpAddressDetailsReservedIpList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsOutputReference.property.internalValue"></a>

```java
public LoadBalancerLoadBalancerIpAddressDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetails">LoadBalancerLoadBalancerIpAddressDetails</a>

---


### LoadBalancerLoadBalancerIpAddressDetailsReservedIpList <a name="LoadBalancerLoadBalancerIpAddressDetailsReservedIpList" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.load_balancer_load_balancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpList;

new LoadBalancerLoadBalancerIpAddressDetailsReservedIpList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpList.get"></a>

```java
public LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference <a name="LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.load_balancer_load_balancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference;

new LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIp">LoadBalancerLoadBalancerIpAddressDetailsReservedIp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIpOutputReference.property.internalValue"></a>

```java
public LoadBalancerLoadBalancerIpAddressDetailsReservedIp getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerIpAddressDetailsReservedIp">LoadBalancerLoadBalancerIpAddressDetailsReservedIp</a>

---


### LoadBalancerLoadBalancerReservedIpsList <a name="LoadBalancerLoadBalancerReservedIpsList" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.load_balancer_load_balancer.LoadBalancerLoadBalancerReservedIpsList;

new LoadBalancerLoadBalancerReservedIpsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsList.get"></a>

```java
public LoadBalancerLoadBalancerReservedIpsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIps">LoadBalancerLoadBalancerReservedIps</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIps">LoadBalancerLoadBalancerReservedIps</a>>

---


### LoadBalancerLoadBalancerReservedIpsOutputReference <a name="LoadBalancerLoadBalancerReservedIpsOutputReference" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.load_balancer_load_balancer.LoadBalancerLoadBalancerReservedIpsOutputReference;

new LoadBalancerLoadBalancerReservedIpsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.resetId">resetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.resetId"></a>

```java
public void resetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIps">LoadBalancerLoadBalancerReservedIps</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIpsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerReservedIps">LoadBalancerLoadBalancerReservedIps</a>

---


### LoadBalancerLoadBalancerShapeDetailsOutputReference <a name="LoadBalancerLoadBalancerShapeDetailsOutputReference" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.load_balancer_load_balancer.LoadBalancerLoadBalancerShapeDetailsOutputReference;

new LoadBalancerLoadBalancerShapeDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.property.maximumBandwidthInMbpsInput">maximumBandwidthInMbpsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.property.minimumBandwidthInMbpsInput">minimumBandwidthInMbpsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.property.maximumBandwidthInMbps">maximumBandwidthInMbps</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.property.minimumBandwidthInMbps">minimumBandwidthInMbps</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetails">LoadBalancerLoadBalancerShapeDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maximumBandwidthInMbpsInput`<sup>Optional</sup> <a name="maximumBandwidthInMbpsInput" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.property.maximumBandwidthInMbpsInput"></a>

```java
public java.lang.Number getMaximumBandwidthInMbpsInput();
```

- *Type:* java.lang.Number

---

##### `minimumBandwidthInMbpsInput`<sup>Optional</sup> <a name="minimumBandwidthInMbpsInput" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.property.minimumBandwidthInMbpsInput"></a>

```java
public java.lang.Number getMinimumBandwidthInMbpsInput();
```

- *Type:* java.lang.Number

---

##### `maximumBandwidthInMbps`<sup>Required</sup> <a name="maximumBandwidthInMbps" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.property.maximumBandwidthInMbps"></a>

```java
public java.lang.Number getMaximumBandwidthInMbps();
```

- *Type:* java.lang.Number

---

##### `minimumBandwidthInMbps`<sup>Required</sup> <a name="minimumBandwidthInMbps" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.property.minimumBandwidthInMbps"></a>

```java
public java.lang.Number getMinimumBandwidthInMbps();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetailsOutputReference.property.internalValue"></a>

```java
public LoadBalancerLoadBalancerShapeDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerShapeDetails">LoadBalancerLoadBalancerShapeDetails</a>

---


### LoadBalancerLoadBalancerTimeoutsOutputReference <a name="LoadBalancerLoadBalancerTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.load_balancer_load_balancer.LoadBalancerLoadBalancerTimeoutsOutputReference;

new LoadBalancerLoadBalancerTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeouts">LoadBalancerLoadBalancerTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.loadBalancerLoadBalancer.LoadBalancerLoadBalancerTimeouts">LoadBalancerLoadBalancerTimeouts</a>

---



