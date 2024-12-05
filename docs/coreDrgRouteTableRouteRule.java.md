# `coreDrgRouteTableRouteRule` Submodule <a name="`coreDrgRouteTableRouteRule` Submodule" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CoreDrgRouteTableRouteRule <a name="CoreDrgRouteTableRouteRule" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_table_route_rule oci_core_drg_route_table_route_rule}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_drg_route_table_route_rule.CoreDrgRouteTableRouteRule;

CoreDrgRouteTableRouteRule.Builder.create(Construct scope, java.lang.String id)
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
    .destination(java.lang.String)
    .destinationType(java.lang.String)
    .drgRouteTableId(java.lang.String)
    .nextHopDrgAttachmentId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(CoreDrgRouteTableRouteRuleTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.Initializer.parameter.destination">destination</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_table_route_rule#destination CoreDrgRouteTableRouteRule#destination}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.Initializer.parameter.destinationType">destinationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_table_route_rule#destination_type CoreDrgRouteTableRouteRule#destination_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.Initializer.parameter.drgRouteTableId">drgRouteTableId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_table_route_rule#drg_route_table_id CoreDrgRouteTableRouteRule#drg_route_table_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.Initializer.parameter.nextHopDrgAttachmentId">nextHopDrgAttachmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_table_route_rule#next_hop_drg_attachment_id CoreDrgRouteTableRouteRule#next_hop_drg_attachment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_table_route_rule#id CoreDrgRouteTableRouteRule#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeouts">CoreDrgRouteTableRouteRuleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `destination`<sup>Required</sup> <a name="destination" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.Initializer.parameter.destination"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_table_route_rule#destination CoreDrgRouteTableRouteRule#destination}.

---

##### `destinationType`<sup>Required</sup> <a name="destinationType" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.Initializer.parameter.destinationType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_table_route_rule#destination_type CoreDrgRouteTableRouteRule#destination_type}.

---

##### `drgRouteTableId`<sup>Required</sup> <a name="drgRouteTableId" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.Initializer.parameter.drgRouteTableId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_table_route_rule#drg_route_table_id CoreDrgRouteTableRouteRule#drg_route_table_id}.

---

##### `nextHopDrgAttachmentId`<sup>Required</sup> <a name="nextHopDrgAttachmentId" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.Initializer.parameter.nextHopDrgAttachmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_table_route_rule#next_hop_drg_attachment_id CoreDrgRouteTableRouteRule#next_hop_drg_attachment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_table_route_rule#id CoreDrgRouteTableRouteRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeouts">CoreDrgRouteTableRouteRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_table_route_rule#timeouts CoreDrgRouteTableRouteRule#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.putTimeouts"></a>

```java
public void putTimeouts(CoreDrgRouteTableRouteRuleTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeouts">CoreDrgRouteTableRouteRuleTimeouts</a>

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CoreDrgRouteTableRouteRule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_drg_route_table_route_rule.CoreDrgRouteTableRouteRule;

CoreDrgRouteTableRouteRule.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_drg_route_table_route_rule.CoreDrgRouteTableRouteRule;

CoreDrgRouteTableRouteRule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_drg_route_table_route_rule.CoreDrgRouteTableRouteRule;

CoreDrgRouteTableRouteRule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_drg_route_table_route_rule.CoreDrgRouteTableRouteRule;

CoreDrgRouteTableRouteRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CoreDrgRouteTableRouteRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a CoreDrgRouteTableRouteRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CoreDrgRouteTableRouteRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CoreDrgRouteTableRouteRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_table_route_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the CoreDrgRouteTableRouteRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.attributes">attributes</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.isBlackhole">isBlackhole</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.isConflict">isConflict</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.routeProvenance">routeProvenance</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.routeType">routeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference">CoreDrgRouteTableRouteRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.destinationInput">destinationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.destinationTypeInput">destinationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.drgRouteTableIdInput">drgRouteTableIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.nextHopDrgAttachmentIdInput">nextHopDrgAttachmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeouts">CoreDrgRouteTableRouteRuleTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.destination">destination</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.destinationType">destinationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.drgRouteTableId">drgRouteTableId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.nextHopDrgAttachmentId">nextHopDrgAttachmentId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.attributes"></a>

```java
public StringMap getAttributes();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `isBlackhole`<sup>Required</sup> <a name="isBlackhole" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.isBlackhole"></a>

```java
public IResolvable getIsBlackhole();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isConflict`<sup>Required</sup> <a name="isConflict" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.isConflict"></a>

```java
public IResolvable getIsConflict();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `routeProvenance`<sup>Required</sup> <a name="routeProvenance" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.routeProvenance"></a>

```java
public java.lang.String getRouteProvenance();
```

- *Type:* java.lang.String

---

##### `routeType`<sup>Required</sup> <a name="routeType" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.routeType"></a>

```java
public java.lang.String getRouteType();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.timeouts"></a>

```java
public CoreDrgRouteTableRouteRuleTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference">CoreDrgRouteTableRouteRuleTimeoutsOutputReference</a>

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.destinationInput"></a>

```java
public java.lang.String getDestinationInput();
```

- *Type:* java.lang.String

---

##### `destinationTypeInput`<sup>Optional</sup> <a name="destinationTypeInput" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.destinationTypeInput"></a>

```java
public java.lang.String getDestinationTypeInput();
```

- *Type:* java.lang.String

---

##### `drgRouteTableIdInput`<sup>Optional</sup> <a name="drgRouteTableIdInput" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.drgRouteTableIdInput"></a>

```java
public java.lang.String getDrgRouteTableIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nextHopDrgAttachmentIdInput`<sup>Optional</sup> <a name="nextHopDrgAttachmentIdInput" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.nextHopDrgAttachmentIdInput"></a>

```java
public java.lang.String getNextHopDrgAttachmentIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeouts">CoreDrgRouteTableRouteRuleTimeouts</a>

---

##### `destination`<sup>Required</sup> <a name="destination" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.destination"></a>

```java
public java.lang.String getDestination();
```

- *Type:* java.lang.String

---

##### `destinationType`<sup>Required</sup> <a name="destinationType" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.destinationType"></a>

```java
public java.lang.String getDestinationType();
```

- *Type:* java.lang.String

---

##### `drgRouteTableId`<sup>Required</sup> <a name="drgRouteTableId" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.drgRouteTableId"></a>

```java
public java.lang.String getDrgRouteTableId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `nextHopDrgAttachmentId`<sup>Required</sup> <a name="nextHopDrgAttachmentId" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.nextHopDrgAttachmentId"></a>

```java
public java.lang.String getNextHopDrgAttachmentId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CoreDrgRouteTableRouteRuleConfig <a name="CoreDrgRouteTableRouteRuleConfig" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_drg_route_table_route_rule.CoreDrgRouteTableRouteRuleConfig;

CoreDrgRouteTableRouteRuleConfig.builder()
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
    .destination(java.lang.String)
    .destinationType(java.lang.String)
    .drgRouteTableId(java.lang.String)
    .nextHopDrgAttachmentId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(CoreDrgRouteTableRouteRuleTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleConfig.property.destination">destination</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_table_route_rule#destination CoreDrgRouteTableRouteRule#destination}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleConfig.property.destinationType">destinationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_table_route_rule#destination_type CoreDrgRouteTableRouteRule#destination_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleConfig.property.drgRouteTableId">drgRouteTableId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_table_route_rule#drg_route_table_id CoreDrgRouteTableRouteRule#drg_route_table_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleConfig.property.nextHopDrgAttachmentId">nextHopDrgAttachmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_table_route_rule#next_hop_drg_attachment_id CoreDrgRouteTableRouteRule#next_hop_drg_attachment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_table_route_rule#id CoreDrgRouteTableRouteRule#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeouts">CoreDrgRouteTableRouteRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `destination`<sup>Required</sup> <a name="destination" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleConfig.property.destination"></a>

```java
public java.lang.String getDestination();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_table_route_rule#destination CoreDrgRouteTableRouteRule#destination}.

---

##### `destinationType`<sup>Required</sup> <a name="destinationType" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleConfig.property.destinationType"></a>

```java
public java.lang.String getDestinationType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_table_route_rule#destination_type CoreDrgRouteTableRouteRule#destination_type}.

---

##### `drgRouteTableId`<sup>Required</sup> <a name="drgRouteTableId" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleConfig.property.drgRouteTableId"></a>

```java
public java.lang.String getDrgRouteTableId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_table_route_rule#drg_route_table_id CoreDrgRouteTableRouteRule#drg_route_table_id}.

---

##### `nextHopDrgAttachmentId`<sup>Required</sup> <a name="nextHopDrgAttachmentId" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleConfig.property.nextHopDrgAttachmentId"></a>

```java
public java.lang.String getNextHopDrgAttachmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_table_route_rule#next_hop_drg_attachment_id CoreDrgRouteTableRouteRule#next_hop_drg_attachment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_table_route_rule#id CoreDrgRouteTableRouteRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleConfig.property.timeouts"></a>

```java
public CoreDrgRouteTableRouteRuleTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeouts">CoreDrgRouteTableRouteRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_table_route_rule#timeouts CoreDrgRouteTableRouteRule#timeouts}

---

### CoreDrgRouteTableRouteRuleTimeouts <a name="CoreDrgRouteTableRouteRuleTimeouts" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_drg_route_table_route_rule.CoreDrgRouteTableRouteRuleTimeouts;

CoreDrgRouteTableRouteRuleTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_table_route_rule#create CoreDrgRouteTableRouteRule#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_table_route_rule#delete CoreDrgRouteTableRouteRule#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_table_route_rule#update CoreDrgRouteTableRouteRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_table_route_rule#create CoreDrgRouteTableRouteRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_table_route_rule#delete CoreDrgRouteTableRouteRule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_table_route_rule#update CoreDrgRouteTableRouteRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CoreDrgRouteTableRouteRuleTimeoutsOutputReference <a name="CoreDrgRouteTableRouteRuleTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_drg_route_table_route_rule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference;

new CoreDrgRouteTableRouteRuleTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeouts">CoreDrgRouteTableRouteRuleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeouts">CoreDrgRouteTableRouteRuleTimeouts</a>

---



