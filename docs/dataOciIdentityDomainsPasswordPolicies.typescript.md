# `dataOciIdentityDomainsPasswordPolicies` Submodule <a name="`dataOciIdentityDomainsPasswordPolicies` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsPasswordPolicies <a name="DataOciIdentityDomainsPasswordPolicies" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies oci_identity_domains_password_policies}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.Initializer"></a>

```typescript
import { dataOciIdentityDomainsPasswordPolicies } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies(scope: Construct, id: string, config: DataOciIdentityDomainsPasswordPoliciesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig">DataOciIdentityDomainsPasswordPoliciesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig">DataOciIdentityDomainsPasswordPoliciesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.resetAttributes">resetAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.resetAttributeSets">resetAttributeSets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.resetAuthorization">resetAuthorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.resetPasswordPolicyCount">resetPasswordPolicyCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.resetPasswordPolicyFilter">resetPasswordPolicyFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.resetResourceTypeSchemaVersion">resetResourceTypeSchemaVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.resetSortBy">resetSortBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.resetSortOrder">resetSortOrder</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.resetStartIndex">resetStartIndex</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAttributes` <a name="resetAttributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.resetAttributes"></a>

```typescript
public resetAttributes(): void
```

##### `resetAttributeSets` <a name="resetAttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.resetAttributeSets"></a>

```typescript
public resetAttributeSets(): void
```

##### `resetAuthorization` <a name="resetAuthorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.resetAuthorization"></a>

```typescript
public resetAuthorization(): void
```

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.resetCompartmentId"></a>

```typescript
public resetCompartmentId(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPasswordPolicyCount` <a name="resetPasswordPolicyCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.resetPasswordPolicyCount"></a>

```typescript
public resetPasswordPolicyCount(): void
```

##### `resetPasswordPolicyFilter` <a name="resetPasswordPolicyFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.resetPasswordPolicyFilter"></a>

```typescript
public resetPasswordPolicyFilter(): void
```

##### `resetResourceTypeSchemaVersion` <a name="resetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.resetResourceTypeSchemaVersion"></a>

```typescript
public resetResourceTypeSchemaVersion(): void
```

##### `resetSortBy` <a name="resetSortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.resetSortBy"></a>

```typescript
public resetSortBy(): void
```

##### `resetSortOrder` <a name="resetSortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.resetSortOrder"></a>

```typescript
public resetSortOrder(): void
```

##### `resetStartIndex` <a name="resetStartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.resetStartIndex"></a>

```typescript
public resetStartIndex(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsPasswordPolicies resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.isConstruct"></a>

```typescript
import { dataOciIdentityDomainsPasswordPolicies } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.isTerraformElement"></a>

```typescript
import { dataOciIdentityDomainsPasswordPolicies } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.isTerraformDataSource"></a>

```typescript
import { dataOciIdentityDomainsPasswordPolicies } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.generateConfigForImport"></a>

```typescript
import { dataOciIdentityDomainsPasswordPolicies } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciIdentityDomainsPasswordPolicies resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciIdentityDomainsPasswordPolicies to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciIdentityDomainsPasswordPolicies that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsPasswordPolicies to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.itemsPerPage">itemsPerPage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.passwordPolicies">passwordPolicies</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList">DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.schemas">schemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.totalResults">totalResults</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.attributeSetsInput">attributeSetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.attributesInput">attributesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.authorizationInput">authorizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.idcsEndpointInput">idcsEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.passwordPolicyCountInput">passwordPolicyCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.passwordPolicyFilterInput">passwordPolicyFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.resourceTypeSchemaVersionInput">resourceTypeSchemaVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.sortByInput">sortByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.sortOrderInput">sortOrderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.startIndexInput">startIndexInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.attributes">attributes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.attributeSets">attributeSets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.authorization">authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.idcsEndpoint">idcsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.passwordPolicyCount">passwordPolicyCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.passwordPolicyFilter">passwordPolicyFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.sortBy">sortBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.sortOrder">sortOrder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.startIndex">startIndex</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `itemsPerPage`<sup>Required</sup> <a name="itemsPerPage" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.itemsPerPage"></a>

```typescript
public readonly itemsPerPage: number;
```

- *Type:* number

---

##### `passwordPolicies`<sup>Required</sup> <a name="passwordPolicies" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.passwordPolicies"></a>

```typescript
public readonly passwordPolicies: DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList">DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList</a>

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.schemas"></a>

```typescript
public readonly schemas: string[];
```

- *Type:* string[]

---

##### `totalResults`<sup>Required</sup> <a name="totalResults" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.totalResults"></a>

```typescript
public readonly totalResults: number;
```

- *Type:* number

---

##### `attributeSetsInput`<sup>Optional</sup> <a name="attributeSetsInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.attributeSetsInput"></a>

```typescript
public readonly attributeSetsInput: string[];
```

- *Type:* string[]

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.attributesInput"></a>

```typescript
public readonly attributesInput: string;
```

- *Type:* string

---

##### `authorizationInput`<sup>Optional</sup> <a name="authorizationInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.authorizationInput"></a>

```typescript
public readonly authorizationInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `idcsEndpointInput`<sup>Optional</sup> <a name="idcsEndpointInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.idcsEndpointInput"></a>

```typescript
public readonly idcsEndpointInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `passwordPolicyCountInput`<sup>Optional</sup> <a name="passwordPolicyCountInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.passwordPolicyCountInput"></a>

```typescript
public readonly passwordPolicyCountInput: number;
```

- *Type:* number

---

##### `passwordPolicyFilterInput`<sup>Optional</sup> <a name="passwordPolicyFilterInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.passwordPolicyFilterInput"></a>

```typescript
public readonly passwordPolicyFilterInput: string;
```

- *Type:* string

---

##### `resourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="resourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.resourceTypeSchemaVersionInput"></a>

```typescript
public readonly resourceTypeSchemaVersionInput: string;
```

- *Type:* string

---

##### `sortByInput`<sup>Optional</sup> <a name="sortByInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.sortByInput"></a>

```typescript
public readonly sortByInput: string;
```

- *Type:* string

---

##### `sortOrderInput`<sup>Optional</sup> <a name="sortOrderInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.sortOrderInput"></a>

```typescript
public readonly sortOrderInput: string;
```

- *Type:* string

---

##### `startIndexInput`<sup>Optional</sup> <a name="startIndexInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.startIndexInput"></a>

```typescript
public readonly startIndexInput: number;
```

- *Type:* number

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.attributes"></a>

```typescript
public readonly attributes: string;
```

- *Type:* string

---

##### `attributeSets`<sup>Required</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.attributeSets"></a>

```typescript
public readonly attributeSets: string[];
```

- *Type:* string[]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.idcsEndpoint"></a>

```typescript
public readonly idcsEndpoint: string;
```

- *Type:* string

---

##### `passwordPolicyCount`<sup>Required</sup> <a name="passwordPolicyCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.passwordPolicyCount"></a>

```typescript
public readonly passwordPolicyCount: number;
```

- *Type:* number

---

##### `passwordPolicyFilter`<sup>Required</sup> <a name="passwordPolicyFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.passwordPolicyFilter"></a>

```typescript
public readonly passwordPolicyFilter: string;
```

- *Type:* string

---

##### `resourceTypeSchemaVersion`<sup>Required</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.resourceTypeSchemaVersion"></a>

```typescript
public readonly resourceTypeSchemaVersion: string;
```

- *Type:* string

---

##### `sortBy`<sup>Required</sup> <a name="sortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.sortBy"></a>

```typescript
public readonly sortBy: string;
```

- *Type:* string

---

##### `sortOrder`<sup>Required</sup> <a name="sortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.sortOrder"></a>

```typescript
public readonly sortOrder: string;
```

- *Type:* string

---

##### `startIndex`<sup>Required</sup> <a name="startIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.startIndex"></a>

```typescript
public readonly startIndex: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsPasswordPoliciesConfig <a name="DataOciIdentityDomainsPasswordPoliciesConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.Initializer"></a>

```typescript
import { dataOciIdentityDomainsPasswordPolicies } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsPasswordPoliciesConfig: dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.idcsEndpoint">idcsEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#idcs_endpoint DataOciIdentityDomainsPasswordPolicies#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.attributes">attributes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#attributes DataOciIdentityDomainsPasswordPolicies#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.attributeSets">attributeSets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#attribute_sets DataOciIdentityDomainsPasswordPolicies#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.authorization">authorization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#authorization DataOciIdentityDomainsPasswordPolicies#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#compartment_id DataOciIdentityDomainsPasswordPolicies#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#id DataOciIdentityDomainsPasswordPolicies#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.passwordPolicyCount">passwordPolicyCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#password_policy_count DataOciIdentityDomainsPasswordPolicies#password_policy_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.passwordPolicyFilter">passwordPolicyFilter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#password_policy_filter DataOciIdentityDomainsPasswordPolicies#password_policy_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#resource_type_schema_version DataOciIdentityDomainsPasswordPolicies#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.sortBy">sortBy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#sort_by DataOciIdentityDomainsPasswordPolicies#sort_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.sortOrder">sortOrder</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#sort_order DataOciIdentityDomainsPasswordPolicies#sort_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.startIndex">startIndex</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#start_index DataOciIdentityDomainsPasswordPolicies#start_index}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.idcsEndpoint"></a>

```typescript
public readonly idcsEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#idcs_endpoint DataOciIdentityDomainsPasswordPolicies#idcs_endpoint}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.attributes"></a>

```typescript
public readonly attributes: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#attributes DataOciIdentityDomainsPasswordPolicies#attributes}.

---

##### `attributeSets`<sup>Optional</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.attributeSets"></a>

```typescript
public readonly attributeSets: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#attribute_sets DataOciIdentityDomainsPasswordPolicies#attribute_sets}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#authorization DataOciIdentityDomainsPasswordPolicies#authorization}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#compartment_id DataOciIdentityDomainsPasswordPolicies#compartment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#id DataOciIdentityDomainsPasswordPolicies#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `passwordPolicyCount`<sup>Optional</sup> <a name="passwordPolicyCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.passwordPolicyCount"></a>

```typescript
public readonly passwordPolicyCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#password_policy_count DataOciIdentityDomainsPasswordPolicies#password_policy_count}.

---

##### `passwordPolicyFilter`<sup>Optional</sup> <a name="passwordPolicyFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.passwordPolicyFilter"></a>

```typescript
public readonly passwordPolicyFilter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#password_policy_filter DataOciIdentityDomainsPasswordPolicies#password_policy_filter}.

---

##### `resourceTypeSchemaVersion`<sup>Optional</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.resourceTypeSchemaVersion"></a>

```typescript
public readonly resourceTypeSchemaVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#resource_type_schema_version DataOciIdentityDomainsPasswordPolicies#resource_type_schema_version}.

---

##### `sortBy`<sup>Optional</sup> <a name="sortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.sortBy"></a>

```typescript
public readonly sortBy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#sort_by DataOciIdentityDomainsPasswordPolicies#sort_by}.

---

##### `sortOrder`<sup>Optional</sup> <a name="sortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.sortOrder"></a>

```typescript
public readonly sortOrder: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#sort_order DataOciIdentityDomainsPasswordPolicies#sort_order}.

---

##### `startIndex`<sup>Optional</sup> <a name="startIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.startIndex"></a>

```typescript
public readonly startIndex: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#start_index DataOciIdentityDomainsPasswordPolicies#start_index}.

---

### DataOciIdentityDomainsPasswordPoliciesPasswordPolicies <a name="DataOciIdentityDomainsPasswordPoliciesPasswordPolicies" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPolicies"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPolicies.Initializer"></a>

```typescript
import { dataOciIdentityDomainsPasswordPolicies } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsPasswordPoliciesPasswordPolicies: dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPolicies = { ... }
```


### DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRules <a name="DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRules" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRules.Initializer"></a>

```typescript
import { dataOciIdentityDomainsPasswordPolicies } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRules: dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRules = { ... }
```


### DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroups <a name="DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroups" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroups.Initializer"></a>

```typescript
import { dataOciIdentityDomainsPasswordPolicies } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroups: dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroups = { ... }
```


### DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedBy <a name="DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedBy.Initializer"></a>

```typescript
import { dataOciIdentityDomainsPasswordPolicies } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedBy: dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedBy = { ... }
```


### DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedBy <a name="DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedBy.Initializer"></a>

```typescript
import { dataOciIdentityDomainsPasswordPolicies } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedBy: dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedBy = { ... }
```


### DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMeta <a name="DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMeta.Initializer"></a>

```typescript
import { dataOciIdentityDomainsPasswordPolicies } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMeta: dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMeta = { ... }
```


### DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTags <a name="DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTags.Initializer"></a>

```typescript
import { dataOciIdentityDomainsPasswordPolicies } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTags: dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList <a name="DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsPasswordPolicies } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference <a name="DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsPasswordPolicies } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRules">DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRules;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRules">DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRules</a>

---


### DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList <a name="DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsPasswordPolicies } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference <a name="DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsPasswordPolicies } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroups">DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroups;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroups">DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroups</a>

---


### DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList <a name="DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsPasswordPolicies } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsPasswordPolicies } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedBy">DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedBy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedBy">DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedBy</a>

---


### DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList <a name="DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsPasswordPolicies } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsPasswordPolicies } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedBy">DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedBy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedBy">DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList <a name="DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsPasswordPolicies } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList <a name="DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsPasswordPolicies } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference <a name="DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsPasswordPolicies } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.property.created">created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.property.lastModified">lastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMeta">DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMeta</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `created`<sup>Required</sup> <a name="created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.property.created"></a>

```typescript
public readonly created: string;
```

- *Type:* string

---

##### `lastModified`<sup>Required</sup> <a name="lastModified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.property.lastModified"></a>

```typescript
public readonly lastModified: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMeta;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMeta">DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMeta</a>

---


### DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference <a name="DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsPasswordPolicies } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.allowedChars">allowedChars</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.attributes">attributes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.attributeSets">attributeSets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.authorization">authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.compartmentOcid">compartmentOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.configuredPasswordPolicyRules">configuredPasswordPolicyRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList">DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.deleteInProgress">deleteInProgress</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.dictionaryDelimiter">dictionaryDelimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.dictionaryLocation">dictionaryLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.dictionaryWordDisallowed">dictionaryWordDisallowed</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.disallowedChars">disallowedChars</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.disallowedSubstrings">disallowedSubstrings</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.disallowedUserAttributeValues">disallowedUserAttributeValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.distinctCharacters">distinctCharacters</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.domainOcid">domainOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.externalId">externalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.firstNameDisallowed">firstNameDisallowed</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.forcePasswordReset">forcePasswordReset</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.groups">groups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList">DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.idcsCreatedBy">idcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList">DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.idcsEndpoint">idcsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.idcsLastModifiedBy">idcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList">DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.idcsLastUpgradedInRelease">idcsLastUpgradedInRelease</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.idcsPreventedOperations">idcsPreventedOperations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.lastNameDisallowed">lastNameDisallowed</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.lockoutDuration">lockoutDuration</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.maxIncorrectAttempts">maxIncorrectAttempts</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.maxLength">maxLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.maxRepeatedChars">maxRepeatedChars</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.maxSpecialChars">maxSpecialChars</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.meta">meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList">DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.minAlphaNumerals">minAlphaNumerals</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.minAlphas">minAlphas</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.minLength">minLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.minLowerCase">minLowerCase</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.minNumerals">minNumerals</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.minPasswordAge">minPasswordAge</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.minSpecialChars">minSpecialChars</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.minUniqueChars">minUniqueChars</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.minUpperCase">minUpperCase</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.numPasswordsInHistory">numPasswordsInHistory</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.passwordExpiresAfter">passwordExpiresAfter</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.passwordExpireWarning">passwordExpireWarning</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.passwordStrength">passwordStrength</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.requiredChars">requiredChars</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.schemas">schemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.startsWithAlphabet">startsWithAlphabet</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList">DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.tenancyOcid">tenancyOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.userNameDisallowed">userNameDisallowed</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPolicies">DataOciIdentityDomainsPasswordPoliciesPasswordPolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedChars`<sup>Required</sup> <a name="allowedChars" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.allowedChars"></a>

```typescript
public readonly allowedChars: string;
```

- *Type:* string

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.attributes"></a>

```typescript
public readonly attributes: string;
```

- *Type:* string

---

##### `attributeSets`<sup>Required</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.attributeSets"></a>

```typescript
public readonly attributeSets: string[];
```

- *Type:* string[]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

---

##### `compartmentOcid`<sup>Required</sup> <a name="compartmentOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.compartmentOcid"></a>

```typescript
public readonly compartmentOcid: string;
```

- *Type:* string

---

##### `configuredPasswordPolicyRules`<sup>Required</sup> <a name="configuredPasswordPolicyRules" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.configuredPasswordPolicyRules"></a>

```typescript
public readonly configuredPasswordPolicyRules: DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList">DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList</a>

---

##### `deleteInProgress`<sup>Required</sup> <a name="deleteInProgress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.deleteInProgress"></a>

```typescript
public readonly deleteInProgress: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `dictionaryDelimiter`<sup>Required</sup> <a name="dictionaryDelimiter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.dictionaryDelimiter"></a>

```typescript
public readonly dictionaryDelimiter: string;
```

- *Type:* string

---

##### `dictionaryLocation`<sup>Required</sup> <a name="dictionaryLocation" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.dictionaryLocation"></a>

```typescript
public readonly dictionaryLocation: string;
```

- *Type:* string

---

##### `dictionaryWordDisallowed`<sup>Required</sup> <a name="dictionaryWordDisallowed" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.dictionaryWordDisallowed"></a>

```typescript
public readonly dictionaryWordDisallowed: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `disallowedChars`<sup>Required</sup> <a name="disallowedChars" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.disallowedChars"></a>

```typescript
public readonly disallowedChars: string;
```

- *Type:* string

---

##### `disallowedSubstrings`<sup>Required</sup> <a name="disallowedSubstrings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.disallowedSubstrings"></a>

```typescript
public readonly disallowedSubstrings: string[];
```

- *Type:* string[]

---

##### `disallowedUserAttributeValues`<sup>Required</sup> <a name="disallowedUserAttributeValues" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.disallowedUserAttributeValues"></a>

```typescript
public readonly disallowedUserAttributeValues: string[];
```

- *Type:* string[]

---

##### `distinctCharacters`<sup>Required</sup> <a name="distinctCharacters" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.distinctCharacters"></a>

```typescript
public readonly distinctCharacters: number;
```

- *Type:* number

---

##### `domainOcid`<sup>Required</sup> <a name="domainOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.domainOcid"></a>

```typescript
public readonly domainOcid: string;
```

- *Type:* string

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

---

##### `firstNameDisallowed`<sup>Required</sup> <a name="firstNameDisallowed" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.firstNameDisallowed"></a>

```typescript
public readonly firstNameDisallowed: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `forcePasswordReset`<sup>Required</sup> <a name="forcePasswordReset" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.forcePasswordReset"></a>

```typescript
public readonly forcePasswordReset: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `groups`<sup>Required</sup> <a name="groups" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.groups"></a>

```typescript
public readonly groups: DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList">DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `idcsCreatedBy`<sup>Required</sup> <a name="idcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.idcsCreatedBy"></a>

```typescript
public readonly idcsCreatedBy: DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList">DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList</a>

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.idcsEndpoint"></a>

```typescript
public readonly idcsEndpoint: string;
```

- *Type:* string

---

##### `idcsLastModifiedBy`<sup>Required</sup> <a name="idcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.idcsLastModifiedBy"></a>

```typescript
public readonly idcsLastModifiedBy: DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList">DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList</a>

---

##### `idcsLastUpgradedInRelease`<sup>Required</sup> <a name="idcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.idcsLastUpgradedInRelease"></a>

```typescript
public readonly idcsLastUpgradedInRelease: string;
```

- *Type:* string

---

##### `idcsPreventedOperations`<sup>Required</sup> <a name="idcsPreventedOperations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.idcsPreventedOperations"></a>

```typescript
public readonly idcsPreventedOperations: string[];
```

- *Type:* string[]

---

##### `lastNameDisallowed`<sup>Required</sup> <a name="lastNameDisallowed" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.lastNameDisallowed"></a>

```typescript
public readonly lastNameDisallowed: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `lockoutDuration`<sup>Required</sup> <a name="lockoutDuration" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.lockoutDuration"></a>

```typescript
public readonly lockoutDuration: number;
```

- *Type:* number

---

##### `maxIncorrectAttempts`<sup>Required</sup> <a name="maxIncorrectAttempts" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.maxIncorrectAttempts"></a>

```typescript
public readonly maxIncorrectAttempts: number;
```

- *Type:* number

---

##### `maxLength`<sup>Required</sup> <a name="maxLength" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.maxLength"></a>

```typescript
public readonly maxLength: number;
```

- *Type:* number

---

##### `maxRepeatedChars`<sup>Required</sup> <a name="maxRepeatedChars" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.maxRepeatedChars"></a>

```typescript
public readonly maxRepeatedChars: number;
```

- *Type:* number

---

##### `maxSpecialChars`<sup>Required</sup> <a name="maxSpecialChars" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.maxSpecialChars"></a>

```typescript
public readonly maxSpecialChars: number;
```

- *Type:* number

---

##### `meta`<sup>Required</sup> <a name="meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.meta"></a>

```typescript
public readonly meta: DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList">DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList</a>

---

##### `minAlphaNumerals`<sup>Required</sup> <a name="minAlphaNumerals" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.minAlphaNumerals"></a>

```typescript
public readonly minAlphaNumerals: number;
```

- *Type:* number

---

##### `minAlphas`<sup>Required</sup> <a name="minAlphas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.minAlphas"></a>

```typescript
public readonly minAlphas: number;
```

- *Type:* number

---

##### `minLength`<sup>Required</sup> <a name="minLength" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.minLength"></a>

```typescript
public readonly minLength: number;
```

- *Type:* number

---

##### `minLowerCase`<sup>Required</sup> <a name="minLowerCase" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.minLowerCase"></a>

```typescript
public readonly minLowerCase: number;
```

- *Type:* number

---

##### `minNumerals`<sup>Required</sup> <a name="minNumerals" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.minNumerals"></a>

```typescript
public readonly minNumerals: number;
```

- *Type:* number

---

##### `minPasswordAge`<sup>Required</sup> <a name="minPasswordAge" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.minPasswordAge"></a>

```typescript
public readonly minPasswordAge: number;
```

- *Type:* number

---

##### `minSpecialChars`<sup>Required</sup> <a name="minSpecialChars" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.minSpecialChars"></a>

```typescript
public readonly minSpecialChars: number;
```

- *Type:* number

---

##### `minUniqueChars`<sup>Required</sup> <a name="minUniqueChars" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.minUniqueChars"></a>

```typescript
public readonly minUniqueChars: number;
```

- *Type:* number

---

##### `minUpperCase`<sup>Required</sup> <a name="minUpperCase" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.minUpperCase"></a>

```typescript
public readonly minUpperCase: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `numPasswordsInHistory`<sup>Required</sup> <a name="numPasswordsInHistory" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.numPasswordsInHistory"></a>

```typescript
public readonly numPasswordsInHistory: number;
```

- *Type:* number

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `passwordExpiresAfter`<sup>Required</sup> <a name="passwordExpiresAfter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.passwordExpiresAfter"></a>

```typescript
public readonly passwordExpiresAfter: number;
```

- *Type:* number

---

##### `passwordExpireWarning`<sup>Required</sup> <a name="passwordExpireWarning" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.passwordExpireWarning"></a>

```typescript
public readonly passwordExpireWarning: number;
```

- *Type:* number

---

##### `passwordStrength`<sup>Required</sup> <a name="passwordStrength" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.passwordStrength"></a>

```typescript
public readonly passwordStrength: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `requiredChars`<sup>Required</sup> <a name="requiredChars" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.requiredChars"></a>

```typescript
public readonly requiredChars: string;
```

- *Type:* string

---

##### `resourceTypeSchemaVersion`<sup>Required</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.resourceTypeSchemaVersion"></a>

```typescript
public readonly resourceTypeSchemaVersion: string;
```

- *Type:* string

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.schemas"></a>

```typescript
public readonly schemas: string[];
```

- *Type:* string[]

---

##### `startsWithAlphabet`<sup>Required</sup> <a name="startsWithAlphabet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.startsWithAlphabet"></a>

```typescript
public readonly startsWithAlphabet: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.tags"></a>

```typescript
public readonly tags: DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList">DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList</a>

---

##### `tenancyOcid`<sup>Required</sup> <a name="tenancyOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.tenancyOcid"></a>

```typescript
public readonly tenancyOcid: string;
```

- *Type:* string

---

##### `userNameDisallowed`<sup>Required</sup> <a name="userNameDisallowed" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.userNameDisallowed"></a>

```typescript
public readonly userNameDisallowed: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsPasswordPoliciesPasswordPolicies;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPolicies">DataOciIdentityDomainsPasswordPoliciesPasswordPolicies</a>

---


### DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList <a name="DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsPasswordPolicies } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference <a name="DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsPasswordPolicies } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTags">DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTags;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTags">DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTags</a>

---



