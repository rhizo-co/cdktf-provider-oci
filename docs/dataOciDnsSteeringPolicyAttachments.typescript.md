# `dataOciDnsSteeringPolicyAttachments` Submodule <a name="`dataOciDnsSteeringPolicyAttachments` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDnsSteeringPolicyAttachments <a name="DataOciDnsSteeringPolicyAttachments" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy_attachments oci_dns_steering_policy_attachments}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.Initializer"></a>

```typescript
import { dataOciDnsSteeringPolicyAttachments } from 'rhizo-co-terraform-provider-oci'

new dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments(scope: Construct, id: string, config: DataOciDnsSteeringPolicyAttachmentsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig">DataOciDnsSteeringPolicyAttachmentsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig">DataOciDnsSteeringPolicyAttachmentsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.resetDomain">resetDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.resetDomainContains">resetDomainContains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.resetState">resetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.resetSteeringPolicyId">resetSteeringPolicyId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.resetTimeCreatedGreaterThanOrEqualTo">resetTimeCreatedGreaterThanOrEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.resetTimeCreatedLessThan">resetTimeCreatedLessThan</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.resetZoneId">resetZoneId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciDnsSteeringPolicyAttachmentsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilter">DataOciDnsSteeringPolicyAttachmentsFilter</a>[]

---

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetDomain` <a name="resetDomain" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.resetDomain"></a>

```typescript
public resetDomain(): void
```

##### `resetDomainContains` <a name="resetDomainContains" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.resetDomainContains"></a>

```typescript
public resetDomainContains(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.resetId"></a>

```typescript
public resetId(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.resetState"></a>

```typescript
public resetState(): void
```

##### `resetSteeringPolicyId` <a name="resetSteeringPolicyId" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.resetSteeringPolicyId"></a>

```typescript
public resetSteeringPolicyId(): void
```

##### `resetTimeCreatedGreaterThanOrEqualTo` <a name="resetTimeCreatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.resetTimeCreatedGreaterThanOrEqualTo"></a>

```typescript
public resetTimeCreatedGreaterThanOrEqualTo(): void
```

##### `resetTimeCreatedLessThan` <a name="resetTimeCreatedLessThan" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.resetTimeCreatedLessThan"></a>

```typescript
public resetTimeCreatedLessThan(): void
```

##### `resetZoneId` <a name="resetZoneId" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.resetZoneId"></a>

```typescript
public resetZoneId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDnsSteeringPolicyAttachments resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.isConstruct"></a>

```typescript
import { dataOciDnsSteeringPolicyAttachments } from 'rhizo-co-terraform-provider-oci'

dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.isTerraformElement"></a>

```typescript
import { dataOciDnsSteeringPolicyAttachments } from 'rhizo-co-terraform-provider-oci'

dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.isTerraformDataSource"></a>

```typescript
import { dataOciDnsSteeringPolicyAttachments } from 'rhizo-co-terraform-provider-oci'

dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.generateConfigForImport"></a>

```typescript
import { dataOciDnsSteeringPolicyAttachments } from 'rhizo-co-terraform-provider-oci'

dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDnsSteeringPolicyAttachments resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDnsSteeringPolicyAttachments to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDnsSteeringPolicyAttachments that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy_attachments#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDnsSteeringPolicyAttachments to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterList">DataOciDnsSteeringPolicyAttachmentsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.steeringPolicyAttachments">steeringPolicyAttachments</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsList">DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.domainContainsInput">domainContainsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.domainInput">domainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilter">DataOciDnsSteeringPolicyAttachmentsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.steeringPolicyIdInput">steeringPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.timeCreatedGreaterThanOrEqualToInput">timeCreatedGreaterThanOrEqualToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.timeCreatedLessThanInput">timeCreatedLessThanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.zoneIdInput">zoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.domainContains">domainContains</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.steeringPolicyId">steeringPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.timeCreatedGreaterThanOrEqualTo">timeCreatedGreaterThanOrEqualTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.timeCreatedLessThan">timeCreatedLessThan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.zoneId">zoneId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.filter"></a>

```typescript
public readonly filter: DataOciDnsSteeringPolicyAttachmentsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterList">DataOciDnsSteeringPolicyAttachmentsFilterList</a>

---

##### `steeringPolicyAttachments`<sup>Required</sup> <a name="steeringPolicyAttachments" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.steeringPolicyAttachments"></a>

```typescript
public readonly steeringPolicyAttachments: DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsList">DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `domainContainsInput`<sup>Optional</sup> <a name="domainContainsInput" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.domainContainsInput"></a>

```typescript
public readonly domainContainsInput: string;
```

- *Type:* string

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.domainInput"></a>

```typescript
public readonly domainInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciDnsSteeringPolicyAttachmentsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilter">DataOciDnsSteeringPolicyAttachmentsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `steeringPolicyIdInput`<sup>Optional</sup> <a name="steeringPolicyIdInput" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.steeringPolicyIdInput"></a>

```typescript
public readonly steeringPolicyIdInput: string;
```

- *Type:* string

---

##### `timeCreatedGreaterThanOrEqualToInput`<sup>Optional</sup> <a name="timeCreatedGreaterThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.timeCreatedGreaterThanOrEqualToInput"></a>

```typescript
public readonly timeCreatedGreaterThanOrEqualToInput: string;
```

- *Type:* string

---

##### `timeCreatedLessThanInput`<sup>Optional</sup> <a name="timeCreatedLessThanInput" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.timeCreatedLessThanInput"></a>

```typescript
public readonly timeCreatedLessThanInput: string;
```

- *Type:* string

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.zoneIdInput"></a>

```typescript
public readonly zoneIdInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `domain`<sup>Required</sup> <a name="domain" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `domainContains`<sup>Required</sup> <a name="domainContains" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.domainContains"></a>

```typescript
public readonly domainContains: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `steeringPolicyId`<sup>Required</sup> <a name="steeringPolicyId" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.steeringPolicyId"></a>

```typescript
public readonly steeringPolicyId: string;
```

- *Type:* string

---

##### `timeCreatedGreaterThanOrEqualTo`<sup>Required</sup> <a name="timeCreatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.timeCreatedGreaterThanOrEqualTo"></a>

```typescript
public readonly timeCreatedGreaterThanOrEqualTo: string;
```

- *Type:* string

---

##### `timeCreatedLessThan`<sup>Required</sup> <a name="timeCreatedLessThan" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.timeCreatedLessThan"></a>

```typescript
public readonly timeCreatedLessThan: string;
```

- *Type:* string

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDnsSteeringPolicyAttachmentsConfig <a name="DataOciDnsSteeringPolicyAttachmentsConfig" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig.Initializer"></a>

```typescript
import { dataOciDnsSteeringPolicyAttachments } from 'rhizo-co-terraform-provider-oci'

const dataOciDnsSteeringPolicyAttachmentsConfig: dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy_attachments#compartment_id DataOciDnsSteeringPolicyAttachments#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy_attachments#display_name DataOciDnsSteeringPolicyAttachments#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig.property.domain">domain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy_attachments#domain DataOciDnsSteeringPolicyAttachments#domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig.property.domainContains">domainContains</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy_attachments#domain_contains DataOciDnsSteeringPolicyAttachments#domain_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilter">DataOciDnsSteeringPolicyAttachmentsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy_attachments#id DataOciDnsSteeringPolicyAttachments#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy_attachments#state DataOciDnsSteeringPolicyAttachments#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig.property.steeringPolicyId">steeringPolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy_attachments#steering_policy_id DataOciDnsSteeringPolicyAttachments#steering_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig.property.timeCreatedGreaterThanOrEqualTo">timeCreatedGreaterThanOrEqualTo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy_attachments#time_created_greater_than_or_equal_to DataOciDnsSteeringPolicyAttachments#time_created_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig.property.timeCreatedLessThan">timeCreatedLessThan</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy_attachments#time_created_less_than DataOciDnsSteeringPolicyAttachments#time_created_less_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig.property.zoneId">zoneId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy_attachments#zone_id DataOciDnsSteeringPolicyAttachments#zone_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy_attachments#compartment_id DataOciDnsSteeringPolicyAttachments#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy_attachments#display_name DataOciDnsSteeringPolicyAttachments#display_name}.

---

##### `domain`<sup>Optional</sup> <a name="domain" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy_attachments#domain DataOciDnsSteeringPolicyAttachments#domain}.

---

##### `domainContains`<sup>Optional</sup> <a name="domainContains" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig.property.domainContains"></a>

```typescript
public readonly domainContains: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy_attachments#domain_contains DataOciDnsSteeringPolicyAttachments#domain_contains}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciDnsSteeringPolicyAttachmentsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilter">DataOciDnsSteeringPolicyAttachmentsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy_attachments#filter DataOciDnsSteeringPolicyAttachments#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy_attachments#id DataOciDnsSteeringPolicyAttachments#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy_attachments#state DataOciDnsSteeringPolicyAttachments#state}.

---

##### `steeringPolicyId`<sup>Optional</sup> <a name="steeringPolicyId" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig.property.steeringPolicyId"></a>

```typescript
public readonly steeringPolicyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy_attachments#steering_policy_id DataOciDnsSteeringPolicyAttachments#steering_policy_id}.

---

##### `timeCreatedGreaterThanOrEqualTo`<sup>Optional</sup> <a name="timeCreatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig.property.timeCreatedGreaterThanOrEqualTo"></a>

```typescript
public readonly timeCreatedGreaterThanOrEqualTo: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy_attachments#time_created_greater_than_or_equal_to DataOciDnsSteeringPolicyAttachments#time_created_greater_than_or_equal_to}.

---

##### `timeCreatedLessThan`<sup>Optional</sup> <a name="timeCreatedLessThan" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig.property.timeCreatedLessThan"></a>

```typescript
public readonly timeCreatedLessThan: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy_attachments#time_created_less_than DataOciDnsSteeringPolicyAttachments#time_created_less_than}.

---

##### `zoneId`<sup>Optional</sup> <a name="zoneId" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy_attachments#zone_id DataOciDnsSteeringPolicyAttachments#zone_id}.

---

### DataOciDnsSteeringPolicyAttachmentsFilter <a name="DataOciDnsSteeringPolicyAttachmentsFilter" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilter.Initializer"></a>

```typescript
import { dataOciDnsSteeringPolicyAttachments } from 'rhizo-co-terraform-provider-oci'

const dataOciDnsSteeringPolicyAttachmentsFilter: dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy_attachments#name DataOciDnsSteeringPolicyAttachments#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy_attachments#values DataOciDnsSteeringPolicyAttachments#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy_attachments#regex DataOciDnsSteeringPolicyAttachments#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy_attachments#name DataOciDnsSteeringPolicyAttachments#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy_attachments#values DataOciDnsSteeringPolicyAttachments#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy_attachments#regex DataOciDnsSteeringPolicyAttachments#regex}.

---

### DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachments <a name="DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachments" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachments"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachments.Initializer"></a>

```typescript
import { dataOciDnsSteeringPolicyAttachments } from 'rhizo-co-terraform-provider-oci'

const dataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachments: dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachments = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDnsSteeringPolicyAttachmentsFilterList <a name="DataOciDnsSteeringPolicyAttachmentsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterList.Initializer"></a>

```typescript
import { dataOciDnsSteeringPolicyAttachments } from 'rhizo-co-terraform-provider-oci'

new dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterList.get"></a>

```typescript
public get(index: number): DataOciDnsSteeringPolicyAttachmentsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilter">DataOciDnsSteeringPolicyAttachmentsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDnsSteeringPolicyAttachmentsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilter">DataOciDnsSteeringPolicyAttachmentsFilter</a>[]

---


### DataOciDnsSteeringPolicyAttachmentsFilterOutputReference <a name="DataOciDnsSteeringPolicyAttachmentsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciDnsSteeringPolicyAttachments } from 'rhizo-co-terraform-provider-oci'

new dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilter">DataOciDnsSteeringPolicyAttachmentsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDnsSteeringPolicyAttachmentsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilter">DataOciDnsSteeringPolicyAttachmentsFilter</a>

---


### DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsList <a name="DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsList" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsList.Initializer"></a>

```typescript
import { dataOciDnsSteeringPolicyAttachments } from 'rhizo-co-terraform-provider-oci'

new dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsList.get"></a>

```typescript
public get(index: number): DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference <a name="DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.Initializer"></a>

```typescript
import { dataOciDnsSteeringPolicyAttachments } from 'rhizo-co-terraform-provider-oci'

new dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.property.rtypes">rtypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.property.selfAttribute">selfAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.property.steeringPolicyId">steeringPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.property.zoneId">zoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachments">DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachments</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `rtypes`<sup>Required</sup> <a name="rtypes" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.property.rtypes"></a>

```typescript
public readonly rtypes: string[];
```

- *Type:* string[]

---

##### `selfAttribute`<sup>Required</sup> <a name="selfAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.property.selfAttribute"></a>

```typescript
public readonly selfAttribute: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `steeringPolicyId`<sup>Required</sup> <a name="steeringPolicyId" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.property.steeringPolicyId"></a>

```typescript
public readonly steeringPolicyId: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachments;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachments">DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachments</a>

---



