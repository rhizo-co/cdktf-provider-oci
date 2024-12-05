# `dataOciIdentityDomainsMyTrustedUserAgents` Submodule <a name="`dataOciIdentityDomainsMyTrustedUserAgents` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsMyTrustedUserAgents <a name="DataOciIdentityDomainsMyTrustedUserAgents" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_trusted_user_agents oci_identity_domains_my_trusted_user_agents}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyTrustedUserAgents } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents(scope: Construct, id: string, config: DataOciIdentityDomainsMyTrustedUserAgentsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsConfig">DataOciIdentityDomainsMyTrustedUserAgentsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsConfig">DataOciIdentityDomainsMyTrustedUserAgentsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.resetAttributes">resetAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.resetAttributeSets">resetAttributeSets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.resetAuthorization">resetAuthorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.resetMyTrustedUserAgentCount">resetMyTrustedUserAgentCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.resetMyTrustedUserAgentFilter">resetMyTrustedUserAgentFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.resetResourceTypeSchemaVersion">resetResourceTypeSchemaVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.resetSortBy">resetSortBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.resetSortOrder">resetSortOrder</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.resetStartIndex">resetStartIndex</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAttributes` <a name="resetAttributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.resetAttributes"></a>

```typescript
public resetAttributes(): void
```

##### `resetAttributeSets` <a name="resetAttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.resetAttributeSets"></a>

```typescript
public resetAttributeSets(): void
```

##### `resetAuthorization` <a name="resetAuthorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.resetAuthorization"></a>

```typescript
public resetAuthorization(): void
```

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.resetCompartmentId"></a>

```typescript
public resetCompartmentId(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMyTrustedUserAgentCount` <a name="resetMyTrustedUserAgentCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.resetMyTrustedUserAgentCount"></a>

```typescript
public resetMyTrustedUserAgentCount(): void
```

##### `resetMyTrustedUserAgentFilter` <a name="resetMyTrustedUserAgentFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.resetMyTrustedUserAgentFilter"></a>

```typescript
public resetMyTrustedUserAgentFilter(): void
```

##### `resetResourceTypeSchemaVersion` <a name="resetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.resetResourceTypeSchemaVersion"></a>

```typescript
public resetResourceTypeSchemaVersion(): void
```

##### `resetSortBy` <a name="resetSortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.resetSortBy"></a>

```typescript
public resetSortBy(): void
```

##### `resetSortOrder` <a name="resetSortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.resetSortOrder"></a>

```typescript
public resetSortOrder(): void
```

##### `resetStartIndex` <a name="resetStartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.resetStartIndex"></a>

```typescript
public resetStartIndex(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsMyTrustedUserAgents resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.isConstruct"></a>

```typescript
import { dataOciIdentityDomainsMyTrustedUserAgents } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.isTerraformElement"></a>

```typescript
import { dataOciIdentityDomainsMyTrustedUserAgents } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.isTerraformDataSource"></a>

```typescript
import { dataOciIdentityDomainsMyTrustedUserAgents } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.generateConfigForImport"></a>

```typescript
import { dataOciIdentityDomainsMyTrustedUserAgents } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciIdentityDomainsMyTrustedUserAgents resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciIdentityDomainsMyTrustedUserAgents to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciIdentityDomainsMyTrustedUserAgents that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_trusted_user_agents#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsMyTrustedUserAgents to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.itemsPerPage">itemsPerPage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.myTrustedUserAgents">myTrustedUserAgents</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsList">DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.schemas">schemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.totalResults">totalResults</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.attributeSetsInput">attributeSetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.attributesInput">attributesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.authorizationInput">authorizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.idcsEndpointInput">idcsEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.myTrustedUserAgentCountInput">myTrustedUserAgentCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.myTrustedUserAgentFilterInput">myTrustedUserAgentFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.resourceTypeSchemaVersionInput">resourceTypeSchemaVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.sortByInput">sortByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.sortOrderInput">sortOrderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.startIndexInput">startIndexInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.attributes">attributes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.attributeSets">attributeSets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.authorization">authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.idcsEndpoint">idcsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.myTrustedUserAgentCount">myTrustedUserAgentCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.myTrustedUserAgentFilter">myTrustedUserAgentFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.sortBy">sortBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.sortOrder">sortOrder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.startIndex">startIndex</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `itemsPerPage`<sup>Required</sup> <a name="itemsPerPage" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.itemsPerPage"></a>

```typescript
public readonly itemsPerPage: number;
```

- *Type:* number

---

##### `myTrustedUserAgents`<sup>Required</sup> <a name="myTrustedUserAgents" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.myTrustedUserAgents"></a>

```typescript
public readonly myTrustedUserAgents: DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsList">DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsList</a>

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.schemas"></a>

```typescript
public readonly schemas: string[];
```

- *Type:* string[]

---

##### `totalResults`<sup>Required</sup> <a name="totalResults" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.totalResults"></a>

```typescript
public readonly totalResults: number;
```

- *Type:* number

---

##### `attributeSetsInput`<sup>Optional</sup> <a name="attributeSetsInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.attributeSetsInput"></a>

```typescript
public readonly attributeSetsInput: string[];
```

- *Type:* string[]

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.attributesInput"></a>

```typescript
public readonly attributesInput: string;
```

- *Type:* string

---

##### `authorizationInput`<sup>Optional</sup> <a name="authorizationInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.authorizationInput"></a>

```typescript
public readonly authorizationInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `idcsEndpointInput`<sup>Optional</sup> <a name="idcsEndpointInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.idcsEndpointInput"></a>

```typescript
public readonly idcsEndpointInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `myTrustedUserAgentCountInput`<sup>Optional</sup> <a name="myTrustedUserAgentCountInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.myTrustedUserAgentCountInput"></a>

```typescript
public readonly myTrustedUserAgentCountInput: number;
```

- *Type:* number

---

##### `myTrustedUserAgentFilterInput`<sup>Optional</sup> <a name="myTrustedUserAgentFilterInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.myTrustedUserAgentFilterInput"></a>

```typescript
public readonly myTrustedUserAgentFilterInput: string;
```

- *Type:* string

---

##### `resourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="resourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.resourceTypeSchemaVersionInput"></a>

```typescript
public readonly resourceTypeSchemaVersionInput: string;
```

- *Type:* string

---

##### `sortByInput`<sup>Optional</sup> <a name="sortByInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.sortByInput"></a>

```typescript
public readonly sortByInput: string;
```

- *Type:* string

---

##### `sortOrderInput`<sup>Optional</sup> <a name="sortOrderInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.sortOrderInput"></a>

```typescript
public readonly sortOrderInput: string;
```

- *Type:* string

---

##### `startIndexInput`<sup>Optional</sup> <a name="startIndexInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.startIndexInput"></a>

```typescript
public readonly startIndexInput: number;
```

- *Type:* number

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.attributes"></a>

```typescript
public readonly attributes: string;
```

- *Type:* string

---

##### `attributeSets`<sup>Required</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.attributeSets"></a>

```typescript
public readonly attributeSets: string[];
```

- *Type:* string[]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.idcsEndpoint"></a>

```typescript
public readonly idcsEndpoint: string;
```

- *Type:* string

---

##### `myTrustedUserAgentCount`<sup>Required</sup> <a name="myTrustedUserAgentCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.myTrustedUserAgentCount"></a>

```typescript
public readonly myTrustedUserAgentCount: number;
```

- *Type:* number

---

##### `myTrustedUserAgentFilter`<sup>Required</sup> <a name="myTrustedUserAgentFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.myTrustedUserAgentFilter"></a>

```typescript
public readonly myTrustedUserAgentFilter: string;
```

- *Type:* string

---

##### `resourceTypeSchemaVersion`<sup>Required</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.resourceTypeSchemaVersion"></a>

```typescript
public readonly resourceTypeSchemaVersion: string;
```

- *Type:* string

---

##### `sortBy`<sup>Required</sup> <a name="sortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.sortBy"></a>

```typescript
public readonly sortBy: string;
```

- *Type:* string

---

##### `sortOrder`<sup>Required</sup> <a name="sortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.sortOrder"></a>

```typescript
public readonly sortOrder: string;
```

- *Type:* string

---

##### `startIndex`<sup>Required</sup> <a name="startIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.startIndex"></a>

```typescript
public readonly startIndex: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgents.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsMyTrustedUserAgentsConfig <a name="DataOciIdentityDomainsMyTrustedUserAgentsConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsConfig.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyTrustedUserAgents } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsMyTrustedUserAgentsConfig: dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsConfig.property.idcsEndpoint">idcsEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_trusted_user_agents#idcs_endpoint DataOciIdentityDomainsMyTrustedUserAgents#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsConfig.property.attributes">attributes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_trusted_user_agents#attributes DataOciIdentityDomainsMyTrustedUserAgents#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsConfig.property.attributeSets">attributeSets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_trusted_user_agents#attribute_sets DataOciIdentityDomainsMyTrustedUserAgents#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsConfig.property.authorization">authorization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_trusted_user_agents#authorization DataOciIdentityDomainsMyTrustedUserAgents#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_trusted_user_agents#compartment_id DataOciIdentityDomainsMyTrustedUserAgents#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_trusted_user_agents#id DataOciIdentityDomainsMyTrustedUserAgents#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsConfig.property.myTrustedUserAgentCount">myTrustedUserAgentCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_trusted_user_agents#my_trusted_user_agent_count DataOciIdentityDomainsMyTrustedUserAgents#my_trusted_user_agent_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsConfig.property.myTrustedUserAgentFilter">myTrustedUserAgentFilter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_trusted_user_agents#my_trusted_user_agent_filter DataOciIdentityDomainsMyTrustedUserAgents#my_trusted_user_agent_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsConfig.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_trusted_user_agents#resource_type_schema_version DataOciIdentityDomainsMyTrustedUserAgents#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsConfig.property.sortBy">sortBy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_trusted_user_agents#sort_by DataOciIdentityDomainsMyTrustedUserAgents#sort_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsConfig.property.sortOrder">sortOrder</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_trusted_user_agents#sort_order DataOciIdentityDomainsMyTrustedUserAgents#sort_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsConfig.property.startIndex">startIndex</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_trusted_user_agents#start_index DataOciIdentityDomainsMyTrustedUserAgents#start_index}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsConfig.property.idcsEndpoint"></a>

```typescript
public readonly idcsEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_trusted_user_agents#idcs_endpoint DataOciIdentityDomainsMyTrustedUserAgents#idcs_endpoint}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsConfig.property.attributes"></a>

```typescript
public readonly attributes: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_trusted_user_agents#attributes DataOciIdentityDomainsMyTrustedUserAgents#attributes}.

---

##### `attributeSets`<sup>Optional</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsConfig.property.attributeSets"></a>

```typescript
public readonly attributeSets: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_trusted_user_agents#attribute_sets DataOciIdentityDomainsMyTrustedUserAgents#attribute_sets}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsConfig.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_trusted_user_agents#authorization DataOciIdentityDomainsMyTrustedUserAgents#authorization}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_trusted_user_agents#compartment_id DataOciIdentityDomainsMyTrustedUserAgents#compartment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_trusted_user_agents#id DataOciIdentityDomainsMyTrustedUserAgents#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `myTrustedUserAgentCount`<sup>Optional</sup> <a name="myTrustedUserAgentCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsConfig.property.myTrustedUserAgentCount"></a>

```typescript
public readonly myTrustedUserAgentCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_trusted_user_agents#my_trusted_user_agent_count DataOciIdentityDomainsMyTrustedUserAgents#my_trusted_user_agent_count}.

---

##### `myTrustedUserAgentFilter`<sup>Optional</sup> <a name="myTrustedUserAgentFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsConfig.property.myTrustedUserAgentFilter"></a>

```typescript
public readonly myTrustedUserAgentFilter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_trusted_user_agents#my_trusted_user_agent_filter DataOciIdentityDomainsMyTrustedUserAgents#my_trusted_user_agent_filter}.

---

##### `resourceTypeSchemaVersion`<sup>Optional</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsConfig.property.resourceTypeSchemaVersion"></a>

```typescript
public readonly resourceTypeSchemaVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_trusted_user_agents#resource_type_schema_version DataOciIdentityDomainsMyTrustedUserAgents#resource_type_schema_version}.

---

##### `sortBy`<sup>Optional</sup> <a name="sortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsConfig.property.sortBy"></a>

```typescript
public readonly sortBy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_trusted_user_agents#sort_by DataOciIdentityDomainsMyTrustedUserAgents#sort_by}.

---

##### `sortOrder`<sup>Optional</sup> <a name="sortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsConfig.property.sortOrder"></a>

```typescript
public readonly sortOrder: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_trusted_user_agents#sort_order DataOciIdentityDomainsMyTrustedUserAgents#sort_order}.

---

##### `startIndex`<sup>Optional</sup> <a name="startIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsConfig.property.startIndex"></a>

```typescript
public readonly startIndex: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_trusted_user_agents#start_index DataOciIdentityDomainsMyTrustedUserAgents#start_index}.

---

### DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgents <a name="DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgents" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgents"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgents.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyTrustedUserAgents } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgents: dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgents = { ... }
```


### DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedBy <a name="DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedBy.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyTrustedUserAgents } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedBy: dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedBy = { ... }
```


### DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedBy <a name="DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedBy.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyTrustedUserAgents } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedBy: dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedBy = { ... }
```


### DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMeta <a name="DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMeta.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyTrustedUserAgents } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMeta: dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMeta = { ... }
```


### DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTags <a name="DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTags.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyTrustedUserAgents } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTags: dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTags = { ... }
```


### DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactors <a name="DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactors" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactors"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactors.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyTrustedUserAgents } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactors: dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactors = { ... }
```


### DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUser <a name="DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUser" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUser"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUser.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyTrustedUserAgents } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUser: dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUser = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByList <a name="DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyTrustedUserAgents } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyTrustedUserAgents } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedBy">DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedBy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedBy">DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedBy</a>

---


### DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByList <a name="DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyTrustedUserAgents } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyTrustedUserAgents } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedBy">DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedBy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedBy">DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsList <a name="DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyTrustedUserAgents } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaList <a name="DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyTrustedUserAgents } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference <a name="DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyTrustedUserAgents } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.property.created">created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.property.lastModified">lastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMeta">DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMeta</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `created`<sup>Required</sup> <a name="created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.property.created"></a>

```typescript
public readonly created: string;
```

- *Type:* string

---

##### `lastModified`<sup>Required</sup> <a name="lastModified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.property.lastModified"></a>

```typescript
public readonly lastModified: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMeta;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMeta">DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMeta</a>

---


### DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference <a name="DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyTrustedUserAgents } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.attributes">attributes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.attributeSets">attributeSets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.authorization">authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.compartmentOcid">compartmentOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.deleteInProgress">deleteInProgress</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.domainOcid">domainOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.expiryTime">expiryTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.idcsCreatedBy">idcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByList">DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.idcsEndpoint">idcsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.idcsLastModifiedBy">idcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByList">DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.idcsLastUpgradedInRelease">idcsLastUpgradedInRelease</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.idcsPreventedOperations">idcsPreventedOperations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.lastUsedOn">lastUsedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.meta">meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaList">DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.myTrustedUserAgentId">myTrustedUserAgentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.platform">platform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.schemas">schemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsList">DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.tenancyOcid">tenancyOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.tokenType">tokenType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.trustedFactors">trustedFactors</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsList">DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.trustToken">trustToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.user">user</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserList">DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgents">DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgents</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.attributes"></a>

```typescript
public readonly attributes: string;
```

- *Type:* string

---

##### `attributeSets`<sup>Required</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.attributeSets"></a>

```typescript
public readonly attributeSets: string[];
```

- *Type:* string[]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

---

##### `compartmentOcid`<sup>Required</sup> <a name="compartmentOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.compartmentOcid"></a>

```typescript
public readonly compartmentOcid: string;
```

- *Type:* string

---

##### `deleteInProgress`<sup>Required</sup> <a name="deleteInProgress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.deleteInProgress"></a>

```typescript
public readonly deleteInProgress: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `domainOcid`<sup>Required</sup> <a name="domainOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.domainOcid"></a>

```typescript
public readonly domainOcid: string;
```

- *Type:* string

---

##### `expiryTime`<sup>Required</sup> <a name="expiryTime" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.expiryTime"></a>

```typescript
public readonly expiryTime: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `idcsCreatedBy`<sup>Required</sup> <a name="idcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.idcsCreatedBy"></a>

```typescript
public readonly idcsCreatedBy: DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByList">DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsCreatedByList</a>

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.idcsEndpoint"></a>

```typescript
public readonly idcsEndpoint: string;
```

- *Type:* string

---

##### `idcsLastModifiedBy`<sup>Required</sup> <a name="idcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.idcsLastModifiedBy"></a>

```typescript
public readonly idcsLastModifiedBy: DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByList">DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsIdcsLastModifiedByList</a>

---

##### `idcsLastUpgradedInRelease`<sup>Required</sup> <a name="idcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.idcsLastUpgradedInRelease"></a>

```typescript
public readonly idcsLastUpgradedInRelease: string;
```

- *Type:* string

---

##### `idcsPreventedOperations`<sup>Required</sup> <a name="idcsPreventedOperations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.idcsPreventedOperations"></a>

```typescript
public readonly idcsPreventedOperations: string[];
```

- *Type:* string[]

---

##### `lastUsedOn`<sup>Required</sup> <a name="lastUsedOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.lastUsedOn"></a>

```typescript
public readonly lastUsedOn: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `meta`<sup>Required</sup> <a name="meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.meta"></a>

```typescript
public readonly meta: DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaList">DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsMetaList</a>

---

##### `myTrustedUserAgentId`<sup>Required</sup> <a name="myTrustedUserAgentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.myTrustedUserAgentId"></a>

```typescript
public readonly myTrustedUserAgentId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `platform`<sup>Required</sup> <a name="platform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.platform"></a>

```typescript
public readonly platform: string;
```

- *Type:* string

---

##### `resourceTypeSchemaVersion`<sup>Required</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.resourceTypeSchemaVersion"></a>

```typescript
public readonly resourceTypeSchemaVersion: string;
```

- *Type:* string

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.schemas"></a>

```typescript
public readonly schemas: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.tags"></a>

```typescript
public readonly tags: DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsList">DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsList</a>

---

##### `tenancyOcid`<sup>Required</sup> <a name="tenancyOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.tenancyOcid"></a>

```typescript
public readonly tenancyOcid: string;
```

- *Type:* string

---

##### `tokenType`<sup>Required</sup> <a name="tokenType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.tokenType"></a>

```typescript
public readonly tokenType: string;
```

- *Type:* string

---

##### `trustedFactors`<sup>Required</sup> <a name="trustedFactors" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.trustedFactors"></a>

```typescript
public readonly trustedFactors: DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsList">DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsList</a>

---

##### `trustToken`<sup>Required</sup> <a name="trustToken" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.trustToken"></a>

```typescript
public readonly trustToken: string;
```

- *Type:* string

---

##### `user`<sup>Required</sup> <a name="user" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.user"></a>

```typescript
public readonly user: DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserList">DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgents;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgents">DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgents</a>

---


### DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsList <a name="DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyTrustedUserAgents } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference <a name="DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyTrustedUserAgents } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTags">DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTags;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTags">DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTags</a>

---


### DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsList <a name="DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyTrustedUserAgents } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference <a name="DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyTrustedUserAgents } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.property.category">category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactors">DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `category`<sup>Required</sup> <a name="category" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactors;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactors">DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsTrustedFactors</a>

---


### DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserList <a name="DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyTrustedUserAgents } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference <a name="DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyTrustedUserAgents } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUser">DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUser</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUserOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUser;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgents.DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUser">DataOciIdentityDomainsMyTrustedUserAgentsMyTrustedUserAgentsUser</a>

---



