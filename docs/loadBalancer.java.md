# `loadBalancer` Submodule <a name="`loadBalancer` Submodule" id="rhizo-co-terraform-provider-oci.loadBalancer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LoadBalancer <a name="LoadBalancer" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer oci_load_balancer}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.load_balancer.LoadBalancer;

LoadBalancer.Builder.create(Construct scope, java.lang.String id)
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
//  .reservedIps(java.util.List<LoadBalancerReservedIps>)
//  .shapeDetails(LoadBalancerShapeDetails)
//  .timeouts(LoadBalancerTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer#compartment_id LoadBalancer#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer#display_name LoadBalancer#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.Initializer.parameter.shape">shape</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer#shape LoadBalancer#shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.Initializer.parameter.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer#subnet_ids LoadBalancer#subnet_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer#defined_tags LoadBalancer#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer#freeform_tags LoadBalancer#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer#id LoadBalancer#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.Initializer.parameter.ipMode">ipMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer#ip_mode LoadBalancer#ip_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.Initializer.parameter.isDeleteProtectionEnabled">isDeleteProtectionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer#is_delete_protection_enabled LoadBalancer#is_delete_protection_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.Initializer.parameter.isPrivate">isPrivate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer#is_private LoadBalancer#is_private}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.Initializer.parameter.isRequestIdEnabled">isRequestIdEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer#is_request_id_enabled LoadBalancer#is_request_id_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.Initializer.parameter.networkSecurityGroupIds">networkSecurityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer#network_security_group_ids LoadBalancer#network_security_group_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.Initializer.parameter.requestIdHeader">requestIdHeader</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer#request_id_header LoadBalancer#request_id_header}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.Initializer.parameter.reservedIps">reservedIps</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerReservedIps">LoadBalancerReservedIps</a>></code> | reserved_ips block. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.Initializer.parameter.shapeDetails">shapeDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerShapeDetails">LoadBalancerShapeDetails</a></code> | shape_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerTimeouts">LoadBalancerTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer#compartment_id LoadBalancer#compartment_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer#display_name LoadBalancer#display_name}.

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.Initializer.parameter.shape"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer#shape LoadBalancer#shape}.

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.Initializer.parameter.subnetIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer#subnet_ids LoadBalancer#subnet_ids}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer#defined_tags LoadBalancer#defined_tags}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer#freeform_tags LoadBalancer#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer#id LoadBalancer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipMode`<sup>Optional</sup> <a name="ipMode" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.Initializer.parameter.ipMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer#ip_mode LoadBalancer#ip_mode}.

---

##### `isDeleteProtectionEnabled`<sup>Optional</sup> <a name="isDeleteProtectionEnabled" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.Initializer.parameter.isDeleteProtectionEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer#is_delete_protection_enabled LoadBalancer#is_delete_protection_enabled}.

---

##### `isPrivate`<sup>Optional</sup> <a name="isPrivate" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.Initializer.parameter.isPrivate"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer#is_private LoadBalancer#is_private}.

---

##### `isRequestIdEnabled`<sup>Optional</sup> <a name="isRequestIdEnabled" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.Initializer.parameter.isRequestIdEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer#is_request_id_enabled LoadBalancer#is_request_id_enabled}.

---

##### `networkSecurityGroupIds`<sup>Optional</sup> <a name="networkSecurityGroupIds" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.Initializer.parameter.networkSecurityGroupIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer#network_security_group_ids LoadBalancer#network_security_group_ids}.

---

##### `requestIdHeader`<sup>Optional</sup> <a name="requestIdHeader" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.Initializer.parameter.requestIdHeader"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer#request_id_header LoadBalancer#request_id_header}.

---

##### `reservedIps`<sup>Optional</sup> <a name="reservedIps" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.Initializer.parameter.reservedIps"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerReservedIps">LoadBalancerReservedIps</a>>

reserved_ips block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer#reserved_ips LoadBalancer#reserved_ips}

---

##### `shapeDetails`<sup>Optional</sup> <a name="shapeDetails" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.Initializer.parameter.shapeDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerShapeDetails">LoadBalancerShapeDetails</a>

shape_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer#shape_details LoadBalancer#shape_details}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerTimeouts">LoadBalancerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer#timeouts LoadBalancer#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.putReservedIps">putReservedIps</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.putShapeDetails">putShapeDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.resetIpMode">resetIpMode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.resetIsDeleteProtectionEnabled">resetIsDeleteProtectionEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.resetIsPrivate">resetIsPrivate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.resetIsRequestIdEnabled">resetIsRequestIdEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.resetNetworkSecurityGroupIds">resetNetworkSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.resetRequestIdHeader">resetRequestIdHeader</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.resetReservedIps">resetReservedIps</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.resetShapeDetails">resetShapeDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putReservedIps` <a name="putReservedIps" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.putReservedIps"></a>

```java
public void putReservedIps(IResolvable OR java.util.List<LoadBalancerReservedIps> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.putReservedIps.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerReservedIps">LoadBalancerReservedIps</a>>

---

##### `putShapeDetails` <a name="putShapeDetails" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.putShapeDetails"></a>

```java
public void putShapeDetails(LoadBalancerShapeDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.putShapeDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerShapeDetails">LoadBalancerShapeDetails</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.putTimeouts"></a>

```java
public void putTimeouts(LoadBalancerTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerTimeouts">LoadBalancerTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.resetId"></a>

```java
public void resetId()
```

##### `resetIpMode` <a name="resetIpMode" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.resetIpMode"></a>

```java
public void resetIpMode()
```

##### `resetIsDeleteProtectionEnabled` <a name="resetIsDeleteProtectionEnabled" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.resetIsDeleteProtectionEnabled"></a>

```java
public void resetIsDeleteProtectionEnabled()
```

##### `resetIsPrivate` <a name="resetIsPrivate" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.resetIsPrivate"></a>

```java
public void resetIsPrivate()
```

##### `resetIsRequestIdEnabled` <a name="resetIsRequestIdEnabled" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.resetIsRequestIdEnabled"></a>

```java
public void resetIsRequestIdEnabled()
```

##### `resetNetworkSecurityGroupIds` <a name="resetNetworkSecurityGroupIds" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.resetNetworkSecurityGroupIds"></a>

```java
public void resetNetworkSecurityGroupIds()
```

##### `resetRequestIdHeader` <a name="resetRequestIdHeader" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.resetRequestIdHeader"></a>

```java
public void resetRequestIdHeader()
```

##### `resetReservedIps` <a name="resetReservedIps" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.resetReservedIps"></a>

```java
public void resetReservedIps()
```

##### `resetShapeDetails` <a name="resetShapeDetails" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.resetShapeDetails"></a>

```java
public void resetShapeDetails()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a LoadBalancer resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.load_balancer.LoadBalancer;

LoadBalancer.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.load_balancer.LoadBalancer;

LoadBalancer.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.load_balancer.LoadBalancer;

LoadBalancer.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.load_balancer.LoadBalancer;

LoadBalancer.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),LoadBalancer.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a LoadBalancer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the LoadBalancer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing LoadBalancer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the LoadBalancer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.property.ipAddressDetails">ipAddressDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsList">LoadBalancerIpAddressDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.property.ipAddresses">ipAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.property.reservedIps">reservedIps</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerReservedIpsList">LoadBalancerReservedIpsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.property.shapeDetails">shapeDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerShapeDetailsOutputReference">LoadBalancerShapeDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerTimeoutsOutputReference">LoadBalancerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.property.ipModeInput">ipModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.property.isDeleteProtectionEnabledInput">isDeleteProtectionEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.property.isPrivateInput">isPrivateInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.property.isRequestIdEnabledInput">isRequestIdEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.property.networkSecurityGroupIdsInput">networkSecurityGroupIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.property.requestIdHeaderInput">requestIdHeaderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.property.reservedIpsInput">reservedIpsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerReservedIps">LoadBalancerReservedIps</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.property.shapeDetailsInput">shapeDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerShapeDetails">LoadBalancerShapeDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.property.shapeInput">shapeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.property.subnetIdsInput">subnetIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerTimeouts">LoadBalancerTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.property.ipMode">ipMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.property.isDeleteProtectionEnabled">isDeleteProtectionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.property.isPrivate">isPrivate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.property.isRequestIdEnabled">isRequestIdEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.property.networkSecurityGroupIds">networkSecurityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.property.requestIdHeader">requestIdHeader</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.property.shape">shape</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `ipAddressDetails`<sup>Required</sup> <a name="ipAddressDetails" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.property.ipAddressDetails"></a>

```java
public LoadBalancerIpAddressDetailsList getIpAddressDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsList">LoadBalancerIpAddressDetailsList</a>

---

##### `ipAddresses`<sup>Required</sup> <a name="ipAddresses" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.property.ipAddresses"></a>

```java
public java.util.List<java.lang.String> getIpAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `reservedIps`<sup>Required</sup> <a name="reservedIps" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.property.reservedIps"></a>

```java
public LoadBalancerReservedIpsList getReservedIps();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerReservedIpsList">LoadBalancerReservedIpsList</a>

---

##### `shapeDetails`<sup>Required</sup> <a name="shapeDetails" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.property.shapeDetails"></a>

```java
public LoadBalancerShapeDetailsOutputReference getShapeDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerShapeDetailsOutputReference">LoadBalancerShapeDetailsOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.property.timeouts"></a>

```java
public LoadBalancerTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerTimeoutsOutputReference">LoadBalancerTimeoutsOutputReference</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ipModeInput`<sup>Optional</sup> <a name="ipModeInput" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.property.ipModeInput"></a>

```java
public java.lang.String getIpModeInput();
```

- *Type:* java.lang.String

---

##### `isDeleteProtectionEnabledInput`<sup>Optional</sup> <a name="isDeleteProtectionEnabledInput" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.property.isDeleteProtectionEnabledInput"></a>

```java
public java.lang.Object getIsDeleteProtectionEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isPrivateInput`<sup>Optional</sup> <a name="isPrivateInput" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.property.isPrivateInput"></a>

```java
public java.lang.Object getIsPrivateInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isRequestIdEnabledInput`<sup>Optional</sup> <a name="isRequestIdEnabledInput" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.property.isRequestIdEnabledInput"></a>

```java
public java.lang.Object getIsRequestIdEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `networkSecurityGroupIdsInput`<sup>Optional</sup> <a name="networkSecurityGroupIdsInput" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.property.networkSecurityGroupIdsInput"></a>

```java
public java.util.List<java.lang.String> getNetworkSecurityGroupIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `requestIdHeaderInput`<sup>Optional</sup> <a name="requestIdHeaderInput" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.property.requestIdHeaderInput"></a>

```java
public java.lang.String getRequestIdHeaderInput();
```

- *Type:* java.lang.String

---

##### `reservedIpsInput`<sup>Optional</sup> <a name="reservedIpsInput" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.property.reservedIpsInput"></a>

```java
public java.lang.Object getReservedIpsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerReservedIps">LoadBalancerReservedIps</a>>

---

##### `shapeDetailsInput`<sup>Optional</sup> <a name="shapeDetailsInput" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.property.shapeDetailsInput"></a>

```java
public LoadBalancerShapeDetails getShapeDetailsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerShapeDetails">LoadBalancerShapeDetails</a>

---

##### `shapeInput`<sup>Optional</sup> <a name="shapeInput" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.property.shapeInput"></a>

```java
public java.lang.String getShapeInput();
```

- *Type:* java.lang.String

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.property.subnetIdsInput"></a>

```java
public java.util.List<java.lang.String> getSubnetIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerTimeouts">LoadBalancerTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ipMode`<sup>Required</sup> <a name="ipMode" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.property.ipMode"></a>

```java
public java.lang.String getIpMode();
```

- *Type:* java.lang.String

---

##### `isDeleteProtectionEnabled`<sup>Required</sup> <a name="isDeleteProtectionEnabled" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.property.isDeleteProtectionEnabled"></a>

```java
public java.lang.Object getIsDeleteProtectionEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isPrivate`<sup>Required</sup> <a name="isPrivate" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.property.isPrivate"></a>

```java
public java.lang.Object getIsPrivate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isRequestIdEnabled`<sup>Required</sup> <a name="isRequestIdEnabled" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.property.isRequestIdEnabled"></a>

```java
public java.lang.Object getIsRequestIdEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `networkSecurityGroupIds`<sup>Required</sup> <a name="networkSecurityGroupIds" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.property.networkSecurityGroupIds"></a>

```java
public java.util.List<java.lang.String> getNetworkSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `requestIdHeader`<sup>Required</sup> <a name="requestIdHeader" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.property.requestIdHeader"></a>

```java
public java.lang.String getRequestIdHeader();
```

- *Type:* java.lang.String

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.property.shape"></a>

```java
public java.lang.String getShape();
```

- *Type:* java.lang.String

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancer.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LoadBalancerConfig <a name="LoadBalancerConfig" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.load_balancer.LoadBalancerConfig;

LoadBalancerConfig.builder()
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
//  .reservedIps(java.util.List<LoadBalancerReservedIps>)
//  .shapeDetails(LoadBalancerShapeDetails)
//  .timeouts(LoadBalancerTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer#compartment_id LoadBalancer#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer#display_name LoadBalancer#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerConfig.property.shape">shape</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer#shape LoadBalancer#shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerConfig.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer#subnet_ids LoadBalancer#subnet_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer#defined_tags LoadBalancer#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer#freeform_tags LoadBalancer#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer#id LoadBalancer#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerConfig.property.ipMode">ipMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer#ip_mode LoadBalancer#ip_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerConfig.property.isDeleteProtectionEnabled">isDeleteProtectionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer#is_delete_protection_enabled LoadBalancer#is_delete_protection_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerConfig.property.isPrivate">isPrivate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer#is_private LoadBalancer#is_private}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerConfig.property.isRequestIdEnabled">isRequestIdEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer#is_request_id_enabled LoadBalancer#is_request_id_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerConfig.property.networkSecurityGroupIds">networkSecurityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer#network_security_group_ids LoadBalancer#network_security_group_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerConfig.property.requestIdHeader">requestIdHeader</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer#request_id_header LoadBalancer#request_id_header}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerConfig.property.reservedIps">reservedIps</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerReservedIps">LoadBalancerReservedIps</a>></code> | reserved_ips block. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerConfig.property.shapeDetails">shapeDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerShapeDetails">LoadBalancerShapeDetails</a></code> | shape_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerTimeouts">LoadBalancerTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer#compartment_id LoadBalancer#compartment_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer#display_name LoadBalancer#display_name}.

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerConfig.property.shape"></a>

```java
public java.lang.String getShape();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer#shape LoadBalancer#shape}.

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerConfig.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer#subnet_ids LoadBalancer#subnet_ids}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer#defined_tags LoadBalancer#defined_tags}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer#freeform_tags LoadBalancer#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer#id LoadBalancer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipMode`<sup>Optional</sup> <a name="ipMode" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerConfig.property.ipMode"></a>

```java
public java.lang.String getIpMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer#ip_mode LoadBalancer#ip_mode}.

---

##### `isDeleteProtectionEnabled`<sup>Optional</sup> <a name="isDeleteProtectionEnabled" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerConfig.property.isDeleteProtectionEnabled"></a>

```java
public java.lang.Object getIsDeleteProtectionEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer#is_delete_protection_enabled LoadBalancer#is_delete_protection_enabled}.

---

##### `isPrivate`<sup>Optional</sup> <a name="isPrivate" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerConfig.property.isPrivate"></a>

```java
public java.lang.Object getIsPrivate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer#is_private LoadBalancer#is_private}.

---

##### `isRequestIdEnabled`<sup>Optional</sup> <a name="isRequestIdEnabled" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerConfig.property.isRequestIdEnabled"></a>

```java
public java.lang.Object getIsRequestIdEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer#is_request_id_enabled LoadBalancer#is_request_id_enabled}.

---

##### `networkSecurityGroupIds`<sup>Optional</sup> <a name="networkSecurityGroupIds" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerConfig.property.networkSecurityGroupIds"></a>

```java
public java.util.List<java.lang.String> getNetworkSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer#network_security_group_ids LoadBalancer#network_security_group_ids}.

---

##### `requestIdHeader`<sup>Optional</sup> <a name="requestIdHeader" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerConfig.property.requestIdHeader"></a>

```java
public java.lang.String getRequestIdHeader();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer#request_id_header LoadBalancer#request_id_header}.

---

##### `reservedIps`<sup>Optional</sup> <a name="reservedIps" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerConfig.property.reservedIps"></a>

```java
public java.lang.Object getReservedIps();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerReservedIps">LoadBalancerReservedIps</a>>

reserved_ips block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer#reserved_ips LoadBalancer#reserved_ips}

---

##### `shapeDetails`<sup>Optional</sup> <a name="shapeDetails" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerConfig.property.shapeDetails"></a>

```java
public LoadBalancerShapeDetails getShapeDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerShapeDetails">LoadBalancerShapeDetails</a>

shape_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer#shape_details LoadBalancer#shape_details}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerConfig.property.timeouts"></a>

```java
public LoadBalancerTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerTimeouts">LoadBalancerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer#timeouts LoadBalancer#timeouts}

---

### LoadBalancerIpAddressDetails <a name="LoadBalancerIpAddressDetails" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.load_balancer.LoadBalancerIpAddressDetails;

LoadBalancerIpAddressDetails.builder()
    .build();
```


### LoadBalancerIpAddressDetailsReservedIp <a name="LoadBalancerIpAddressDetailsReservedIp" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsReservedIp"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsReservedIp.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.load_balancer.LoadBalancerIpAddressDetailsReservedIp;

LoadBalancerIpAddressDetailsReservedIp.builder()
    .build();
```


### LoadBalancerReservedIps <a name="LoadBalancerReservedIps" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerReservedIps"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerReservedIps.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.load_balancer.LoadBalancerReservedIps;

LoadBalancerReservedIps.builder()
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerReservedIps.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer#id LoadBalancer#id}. |

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerReservedIps.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer#id LoadBalancer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### LoadBalancerShapeDetails <a name="LoadBalancerShapeDetails" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerShapeDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerShapeDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.load_balancer.LoadBalancerShapeDetails;

LoadBalancerShapeDetails.builder()
    .maximumBandwidthInMbps(java.lang.Number)
    .minimumBandwidthInMbps(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerShapeDetails.property.maximumBandwidthInMbps">maximumBandwidthInMbps</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer#maximum_bandwidth_in_mbps LoadBalancer#maximum_bandwidth_in_mbps}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerShapeDetails.property.minimumBandwidthInMbps">minimumBandwidthInMbps</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer#minimum_bandwidth_in_mbps LoadBalancer#minimum_bandwidth_in_mbps}. |

---

##### `maximumBandwidthInMbps`<sup>Required</sup> <a name="maximumBandwidthInMbps" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerShapeDetails.property.maximumBandwidthInMbps"></a>

```java
public java.lang.Number getMaximumBandwidthInMbps();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer#maximum_bandwidth_in_mbps LoadBalancer#maximum_bandwidth_in_mbps}.

---

##### `minimumBandwidthInMbps`<sup>Required</sup> <a name="minimumBandwidthInMbps" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerShapeDetails.property.minimumBandwidthInMbps"></a>

```java
public java.lang.Number getMinimumBandwidthInMbps();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer#minimum_bandwidth_in_mbps LoadBalancer#minimum_bandwidth_in_mbps}.

---

### LoadBalancerTimeouts <a name="LoadBalancerTimeouts" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.load_balancer.LoadBalancerTimeouts;

LoadBalancerTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer#create LoadBalancer#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer#delete LoadBalancer#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer#update LoadBalancer#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer#create LoadBalancer#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer#delete LoadBalancer#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer#update LoadBalancer#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LoadBalancerIpAddressDetailsList <a name="LoadBalancerIpAddressDetailsList" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.load_balancer.LoadBalancerIpAddressDetailsList;

new LoadBalancerIpAddressDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsList.get"></a>

```java
public LoadBalancerIpAddressDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### LoadBalancerIpAddressDetailsOutputReference <a name="LoadBalancerIpAddressDetailsOutputReference" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.load_balancer.LoadBalancerIpAddressDetailsOutputReference;

new LoadBalancerIpAddressDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsOutputReference.property.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsOutputReference.property.isPublic">isPublic</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsOutputReference.property.reservedIp">reservedIp</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsReservedIpList">LoadBalancerIpAddressDetailsReservedIpList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetails">LoadBalancerIpAddressDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsOutputReference.property.ipAddress"></a>

```java
public java.lang.String getIpAddress();
```

- *Type:* java.lang.String

---

##### `isPublic`<sup>Required</sup> <a name="isPublic" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsOutputReference.property.isPublic"></a>

```java
public IResolvable getIsPublic();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `reservedIp`<sup>Required</sup> <a name="reservedIp" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsOutputReference.property.reservedIp"></a>

```java
public LoadBalancerIpAddressDetailsReservedIpList getReservedIp();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsReservedIpList">LoadBalancerIpAddressDetailsReservedIpList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsOutputReference.property.internalValue"></a>

```java
public LoadBalancerIpAddressDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetails">LoadBalancerIpAddressDetails</a>

---


### LoadBalancerIpAddressDetailsReservedIpList <a name="LoadBalancerIpAddressDetailsReservedIpList" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsReservedIpList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsReservedIpList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.load_balancer.LoadBalancerIpAddressDetailsReservedIpList;

new LoadBalancerIpAddressDetailsReservedIpList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsReservedIpList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsReservedIpList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsReservedIpList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsReservedIpList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsReservedIpList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsReservedIpList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsReservedIpList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsReservedIpList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsReservedIpList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsReservedIpList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsReservedIpList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsReservedIpList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsReservedIpList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsReservedIpList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsReservedIpList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsReservedIpList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsReservedIpList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsReservedIpList.get"></a>

```java
public LoadBalancerIpAddressDetailsReservedIpOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsReservedIpList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsReservedIpList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsReservedIpList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsReservedIpList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsReservedIpList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### LoadBalancerIpAddressDetailsReservedIpOutputReference <a name="LoadBalancerIpAddressDetailsReservedIpOutputReference" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsReservedIpOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsReservedIpOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.load_balancer.LoadBalancerIpAddressDetailsReservedIpOutputReference;

new LoadBalancerIpAddressDetailsReservedIpOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsReservedIpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsReservedIpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsReservedIpOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsReservedIpOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsReservedIpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsReservedIpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsReservedIpOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsReservedIpOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsReservedIpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsReservedIpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsReservedIpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsReservedIpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsReservedIpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsReservedIpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsReservedIpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsReservedIpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsReservedIpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsReservedIpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsReservedIpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsReservedIpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsReservedIpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsReservedIpOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsReservedIpOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsReservedIpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsReservedIpOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsReservedIpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsReservedIpOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsReservedIpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsReservedIpOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsReservedIpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsReservedIpOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsReservedIpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsReservedIpOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsReservedIpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsReservedIpOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsReservedIpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsReservedIpOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsReservedIpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsReservedIpOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsReservedIpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsReservedIpOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsReservedIpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsReservedIpOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsReservedIpOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsReservedIpOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsReservedIpOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsReservedIpOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsReservedIpOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsReservedIpOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsReservedIp">LoadBalancerIpAddressDetailsReservedIp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsReservedIpOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsReservedIpOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsReservedIpOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsReservedIpOutputReference.property.internalValue"></a>

```java
public LoadBalancerIpAddressDetailsReservedIp getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerIpAddressDetailsReservedIp">LoadBalancerIpAddressDetailsReservedIp</a>

---


### LoadBalancerReservedIpsList <a name="LoadBalancerReservedIpsList" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerReservedIpsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerReservedIpsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.load_balancer.LoadBalancerReservedIpsList;

new LoadBalancerReservedIpsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerReservedIpsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerReservedIpsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerReservedIpsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerReservedIpsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerReservedIpsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerReservedIpsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerReservedIpsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerReservedIpsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerReservedIpsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerReservedIpsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerReservedIpsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerReservedIpsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerReservedIpsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerReservedIpsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerReservedIpsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerReservedIpsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerReservedIpsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerReservedIpsList.get"></a>

```java
public LoadBalancerReservedIpsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerReservedIpsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerReservedIpsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerReservedIpsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerReservedIpsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerReservedIps">LoadBalancerReservedIps</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerReservedIpsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerReservedIpsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerReservedIpsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerReservedIps">LoadBalancerReservedIps</a>>

---


### LoadBalancerReservedIpsOutputReference <a name="LoadBalancerReservedIpsOutputReference" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerReservedIpsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerReservedIpsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.load_balancer.LoadBalancerReservedIpsOutputReference;

new LoadBalancerReservedIpsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerReservedIpsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerReservedIpsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerReservedIpsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerReservedIpsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerReservedIpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerReservedIpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerReservedIpsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerReservedIpsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerReservedIpsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerReservedIpsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerReservedIpsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerReservedIpsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerReservedIpsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerReservedIpsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerReservedIpsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerReservedIpsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerReservedIpsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerReservedIpsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerReservedIpsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerReservedIpsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerReservedIpsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerReservedIpsOutputReference.resetId">resetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerReservedIpsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerReservedIpsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerReservedIpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerReservedIpsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerReservedIpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerReservedIpsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerReservedIpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerReservedIpsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerReservedIpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerReservedIpsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerReservedIpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerReservedIpsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerReservedIpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerReservedIpsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerReservedIpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerReservedIpsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerReservedIpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerReservedIpsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerReservedIpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerReservedIpsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerReservedIpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerReservedIpsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerReservedIpsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerReservedIpsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerReservedIpsOutputReference.resetId"></a>

```java
public void resetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerReservedIpsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerReservedIpsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerReservedIpsOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerReservedIpsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerReservedIpsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerReservedIps">LoadBalancerReservedIps</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerReservedIpsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerReservedIpsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerReservedIpsOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerReservedIpsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerReservedIpsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerReservedIps">LoadBalancerReservedIps</a>

---


### LoadBalancerShapeDetailsOutputReference <a name="LoadBalancerShapeDetailsOutputReference" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerShapeDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerShapeDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.load_balancer.LoadBalancerShapeDetailsOutputReference;

new LoadBalancerShapeDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerShapeDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerShapeDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerShapeDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerShapeDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerShapeDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerShapeDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerShapeDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerShapeDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerShapeDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerShapeDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerShapeDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerShapeDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerShapeDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerShapeDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerShapeDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerShapeDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerShapeDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerShapeDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerShapeDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerShapeDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerShapeDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerShapeDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerShapeDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerShapeDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerShapeDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerShapeDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerShapeDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerShapeDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerShapeDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerShapeDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerShapeDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerShapeDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerShapeDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerShapeDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerShapeDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerShapeDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerShapeDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerShapeDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerShapeDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerShapeDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerShapeDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerShapeDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerShapeDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerShapeDetailsOutputReference.property.maximumBandwidthInMbpsInput">maximumBandwidthInMbpsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerShapeDetailsOutputReference.property.minimumBandwidthInMbpsInput">minimumBandwidthInMbpsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerShapeDetailsOutputReference.property.maximumBandwidthInMbps">maximumBandwidthInMbps</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerShapeDetailsOutputReference.property.minimumBandwidthInMbps">minimumBandwidthInMbps</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerShapeDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerShapeDetails">LoadBalancerShapeDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerShapeDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerShapeDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maximumBandwidthInMbpsInput`<sup>Optional</sup> <a name="maximumBandwidthInMbpsInput" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerShapeDetailsOutputReference.property.maximumBandwidthInMbpsInput"></a>

```java
public java.lang.Number getMaximumBandwidthInMbpsInput();
```

- *Type:* java.lang.Number

---

##### `minimumBandwidthInMbpsInput`<sup>Optional</sup> <a name="minimumBandwidthInMbpsInput" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerShapeDetailsOutputReference.property.minimumBandwidthInMbpsInput"></a>

```java
public java.lang.Number getMinimumBandwidthInMbpsInput();
```

- *Type:* java.lang.Number

---

##### `maximumBandwidthInMbps`<sup>Required</sup> <a name="maximumBandwidthInMbps" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerShapeDetailsOutputReference.property.maximumBandwidthInMbps"></a>

```java
public java.lang.Number getMaximumBandwidthInMbps();
```

- *Type:* java.lang.Number

---

##### `minimumBandwidthInMbps`<sup>Required</sup> <a name="minimumBandwidthInMbps" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerShapeDetailsOutputReference.property.minimumBandwidthInMbps"></a>

```java
public java.lang.Number getMinimumBandwidthInMbps();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerShapeDetailsOutputReference.property.internalValue"></a>

```java
public LoadBalancerShapeDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerShapeDetails">LoadBalancerShapeDetails</a>

---


### LoadBalancerTimeoutsOutputReference <a name="LoadBalancerTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.load_balancer.LoadBalancerTimeoutsOutputReference;

new LoadBalancerTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerTimeouts">LoadBalancerTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.loadBalancer.LoadBalancerTimeouts">LoadBalancerTimeouts</a>

---



