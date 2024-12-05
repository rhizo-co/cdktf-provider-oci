# `dataOciIdentityDomainsDynamicResourceGroups` Submodule <a name="`dataOciIdentityDomainsDynamicResourceGroups` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsDynamicResourceGroups <a name="DataOciIdentityDomainsDynamicResourceGroups" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups oci_identity_domains_dynamic_resource_groups}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.Initializer"></a>

```typescript
import { dataOciIdentityDomainsDynamicResourceGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups(scope: Construct, id: string, config: DataOciIdentityDomainsDynamicResourceGroupsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig">DataOciIdentityDomainsDynamicResourceGroupsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig">DataOciIdentityDomainsDynamicResourceGroupsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.resetAttributes">resetAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.resetAttributeSets">resetAttributeSets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.resetAuthorization">resetAuthorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.resetDynamicResourceGroupCount">resetDynamicResourceGroupCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.resetDynamicResourceGroupFilter">resetDynamicResourceGroupFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.resetResourceTypeSchemaVersion">resetResourceTypeSchemaVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.resetSortBy">resetSortBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.resetSortOrder">resetSortOrder</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.resetStartIndex">resetStartIndex</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAttributes` <a name="resetAttributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.resetAttributes"></a>

```typescript
public resetAttributes(): void
```

##### `resetAttributeSets` <a name="resetAttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.resetAttributeSets"></a>

```typescript
public resetAttributeSets(): void
```

##### `resetAuthorization` <a name="resetAuthorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.resetAuthorization"></a>

```typescript
public resetAuthorization(): void
```

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.resetCompartmentId"></a>

```typescript
public resetCompartmentId(): void
```

##### `resetDynamicResourceGroupCount` <a name="resetDynamicResourceGroupCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.resetDynamicResourceGroupCount"></a>

```typescript
public resetDynamicResourceGroupCount(): void
```

##### `resetDynamicResourceGroupFilter` <a name="resetDynamicResourceGroupFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.resetDynamicResourceGroupFilter"></a>

```typescript
public resetDynamicResourceGroupFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.resetId"></a>

```typescript
public resetId(): void
```

##### `resetResourceTypeSchemaVersion` <a name="resetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.resetResourceTypeSchemaVersion"></a>

```typescript
public resetResourceTypeSchemaVersion(): void
```

##### `resetSortBy` <a name="resetSortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.resetSortBy"></a>

```typescript
public resetSortBy(): void
```

##### `resetSortOrder` <a name="resetSortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.resetSortOrder"></a>

```typescript
public resetSortOrder(): void
```

##### `resetStartIndex` <a name="resetStartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.resetStartIndex"></a>

```typescript
public resetStartIndex(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsDynamicResourceGroups resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.isConstruct"></a>

```typescript
import { dataOciIdentityDomainsDynamicResourceGroups } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.isTerraformElement"></a>

```typescript
import { dataOciIdentityDomainsDynamicResourceGroups } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.isTerraformDataSource"></a>

```typescript
import { dataOciIdentityDomainsDynamicResourceGroups } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.generateConfigForImport"></a>

```typescript
import { dataOciIdentityDomainsDynamicResourceGroups } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciIdentityDomainsDynamicResourceGroups resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciIdentityDomainsDynamicResourceGroups to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciIdentityDomainsDynamicResourceGroups that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsDynamicResourceGroups to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.dynamicResourceGroups">dynamicResourceGroups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsList">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.itemsPerPage">itemsPerPage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.schemas">schemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.totalResults">totalResults</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.attributeSetsInput">attributeSetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.attributesInput">attributesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.authorizationInput">authorizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.dynamicResourceGroupCountInput">dynamicResourceGroupCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.dynamicResourceGroupFilterInput">dynamicResourceGroupFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.idcsEndpointInput">idcsEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.resourceTypeSchemaVersionInput">resourceTypeSchemaVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.sortByInput">sortByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.sortOrderInput">sortOrderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.startIndexInput">startIndexInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.attributes">attributes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.attributeSets">attributeSets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.authorization">authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.dynamicResourceGroupCount">dynamicResourceGroupCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.dynamicResourceGroupFilter">dynamicResourceGroupFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.idcsEndpoint">idcsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.sortBy">sortBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.sortOrder">sortOrder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.startIndex">startIndex</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `dynamicResourceGroups`<sup>Required</sup> <a name="dynamicResourceGroups" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.dynamicResourceGroups"></a>

```typescript
public readonly dynamicResourceGroups: DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsList">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsList</a>

---

##### `itemsPerPage`<sup>Required</sup> <a name="itemsPerPage" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.itemsPerPage"></a>

```typescript
public readonly itemsPerPage: number;
```

- *Type:* number

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.schemas"></a>

```typescript
public readonly schemas: string[];
```

- *Type:* string[]

---

##### `totalResults`<sup>Required</sup> <a name="totalResults" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.totalResults"></a>

```typescript
public readonly totalResults: number;
```

- *Type:* number

---

##### `attributeSetsInput`<sup>Optional</sup> <a name="attributeSetsInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.attributeSetsInput"></a>

```typescript
public readonly attributeSetsInput: string[];
```

- *Type:* string[]

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.attributesInput"></a>

```typescript
public readonly attributesInput: string;
```

- *Type:* string

---

##### `authorizationInput`<sup>Optional</sup> <a name="authorizationInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.authorizationInput"></a>

```typescript
public readonly authorizationInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `dynamicResourceGroupCountInput`<sup>Optional</sup> <a name="dynamicResourceGroupCountInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.dynamicResourceGroupCountInput"></a>

```typescript
public readonly dynamicResourceGroupCountInput: number;
```

- *Type:* number

---

##### `dynamicResourceGroupFilterInput`<sup>Optional</sup> <a name="dynamicResourceGroupFilterInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.dynamicResourceGroupFilterInput"></a>

```typescript
public readonly dynamicResourceGroupFilterInput: string;
```

- *Type:* string

---

##### `idcsEndpointInput`<sup>Optional</sup> <a name="idcsEndpointInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.idcsEndpointInput"></a>

```typescript
public readonly idcsEndpointInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `resourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="resourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.resourceTypeSchemaVersionInput"></a>

```typescript
public readonly resourceTypeSchemaVersionInput: string;
```

- *Type:* string

---

##### `sortByInput`<sup>Optional</sup> <a name="sortByInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.sortByInput"></a>

```typescript
public readonly sortByInput: string;
```

- *Type:* string

---

##### `sortOrderInput`<sup>Optional</sup> <a name="sortOrderInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.sortOrderInput"></a>

```typescript
public readonly sortOrderInput: string;
```

- *Type:* string

---

##### `startIndexInput`<sup>Optional</sup> <a name="startIndexInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.startIndexInput"></a>

```typescript
public readonly startIndexInput: number;
```

- *Type:* number

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.attributes"></a>

```typescript
public readonly attributes: string;
```

- *Type:* string

---

##### `attributeSets`<sup>Required</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.attributeSets"></a>

```typescript
public readonly attributeSets: string[];
```

- *Type:* string[]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `dynamicResourceGroupCount`<sup>Required</sup> <a name="dynamicResourceGroupCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.dynamicResourceGroupCount"></a>

```typescript
public readonly dynamicResourceGroupCount: number;
```

- *Type:* number

---

##### `dynamicResourceGroupFilter`<sup>Required</sup> <a name="dynamicResourceGroupFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.dynamicResourceGroupFilter"></a>

```typescript
public readonly dynamicResourceGroupFilter: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.idcsEndpoint"></a>

```typescript
public readonly idcsEndpoint: string;
```

- *Type:* string

---

##### `resourceTypeSchemaVersion`<sup>Required</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.resourceTypeSchemaVersion"></a>

```typescript
public readonly resourceTypeSchemaVersion: string;
```

- *Type:* string

---

##### `sortBy`<sup>Required</sup> <a name="sortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.sortBy"></a>

```typescript
public readonly sortBy: string;
```

- *Type:* string

---

##### `sortOrder`<sup>Required</sup> <a name="sortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.sortOrder"></a>

```typescript
public readonly sortOrder: string;
```

- *Type:* string

---

##### `startIndex`<sup>Required</sup> <a name="startIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.startIndex"></a>

```typescript
public readonly startIndex: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroups.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsDynamicResourceGroupsConfig <a name="DataOciIdentityDomainsDynamicResourceGroupsConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.Initializer"></a>

```typescript
import { dataOciIdentityDomainsDynamicResourceGroups } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsDynamicResourceGroupsConfig: dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.property.idcsEndpoint">idcsEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#idcs_endpoint DataOciIdentityDomainsDynamicResourceGroups#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.property.attributes">attributes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#attributes DataOciIdentityDomainsDynamicResourceGroups#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.property.attributeSets">attributeSets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#attribute_sets DataOciIdentityDomainsDynamicResourceGroups#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.property.authorization">authorization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#authorization DataOciIdentityDomainsDynamicResourceGroups#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#compartment_id DataOciIdentityDomainsDynamicResourceGroups#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.property.dynamicResourceGroupCount">dynamicResourceGroupCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#dynamic_resource_group_count DataOciIdentityDomainsDynamicResourceGroups#dynamic_resource_group_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.property.dynamicResourceGroupFilter">dynamicResourceGroupFilter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#dynamic_resource_group_filter DataOciIdentityDomainsDynamicResourceGroups#dynamic_resource_group_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#id DataOciIdentityDomainsDynamicResourceGroups#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#resource_type_schema_version DataOciIdentityDomainsDynamicResourceGroups#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.property.sortBy">sortBy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#sort_by DataOciIdentityDomainsDynamicResourceGroups#sort_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.property.sortOrder">sortOrder</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#sort_order DataOciIdentityDomainsDynamicResourceGroups#sort_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.property.startIndex">startIndex</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#start_index DataOciIdentityDomainsDynamicResourceGroups#start_index}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.property.idcsEndpoint"></a>

```typescript
public readonly idcsEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#idcs_endpoint DataOciIdentityDomainsDynamicResourceGroups#idcs_endpoint}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.property.attributes"></a>

```typescript
public readonly attributes: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#attributes DataOciIdentityDomainsDynamicResourceGroups#attributes}.

---

##### `attributeSets`<sup>Optional</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.property.attributeSets"></a>

```typescript
public readonly attributeSets: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#attribute_sets DataOciIdentityDomainsDynamicResourceGroups#attribute_sets}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#authorization DataOciIdentityDomainsDynamicResourceGroups#authorization}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#compartment_id DataOciIdentityDomainsDynamicResourceGroups#compartment_id}.

---

##### `dynamicResourceGroupCount`<sup>Optional</sup> <a name="dynamicResourceGroupCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.property.dynamicResourceGroupCount"></a>

```typescript
public readonly dynamicResourceGroupCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#dynamic_resource_group_count DataOciIdentityDomainsDynamicResourceGroups#dynamic_resource_group_count}.

---

##### `dynamicResourceGroupFilter`<sup>Optional</sup> <a name="dynamicResourceGroupFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.property.dynamicResourceGroupFilter"></a>

```typescript
public readonly dynamicResourceGroupFilter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#dynamic_resource_group_filter DataOciIdentityDomainsDynamicResourceGroups#dynamic_resource_group_filter}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#id DataOciIdentityDomainsDynamicResourceGroups#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resourceTypeSchemaVersion`<sup>Optional</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.property.resourceTypeSchemaVersion"></a>

```typescript
public readonly resourceTypeSchemaVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#resource_type_schema_version DataOciIdentityDomainsDynamicResourceGroups#resource_type_schema_version}.

---

##### `sortBy`<sup>Optional</sup> <a name="sortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.property.sortBy"></a>

```typescript
public readonly sortBy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#sort_by DataOciIdentityDomainsDynamicResourceGroups#sort_by}.

---

##### `sortOrder`<sup>Optional</sup> <a name="sortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.property.sortOrder"></a>

```typescript
public readonly sortOrder: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#sort_order DataOciIdentityDomainsDynamicResourceGroups#sort_order}.

---

##### `startIndex`<sup>Optional</sup> <a name="startIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsConfig.property.startIndex"></a>

```typescript
public readonly startIndex: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_groups#start_index DataOciIdentityDomainsDynamicResourceGroups#start_index}.

---

### DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroups <a name="DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroups" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroups.Initializer"></a>

```typescript
import { dataOciIdentityDomainsDynamicResourceGroups } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroups: dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroups = { ... }
```


### DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRoles <a name="DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRoles" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRoles"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRoles.Initializer"></a>

```typescript
import { dataOciIdentityDomainsDynamicResourceGroups } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRoles: dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRoles = { ... }
```


### DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrants <a name="DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrants" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrants"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrants.Initializer"></a>

```typescript
import { dataOciIdentityDomainsDynamicResourceGroups } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrants: dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrants = { ... }
```


### DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedBy <a name="DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedBy.Initializer"></a>

```typescript
import { dataOciIdentityDomainsDynamicResourceGroups } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedBy: dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedBy = { ... }
```


### DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedBy <a name="DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedBy.Initializer"></a>

```typescript
import { dataOciIdentityDomainsDynamicResourceGroups } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedBy: dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedBy = { ... }
```


### DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMeta <a name="DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMeta.Initializer"></a>

```typescript
import { dataOciIdentityDomainsDynamicResourceGroups } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMeta: dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMeta = { ... }
```


### DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTags <a name="DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTags.Initializer"></a>

```typescript
import { dataOciIdentityDomainsDynamicResourceGroups } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTags: dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTags = { ... }
```


### DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTags <a name="DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTags.Initializer"></a>

```typescript
import { dataOciIdentityDomainsDynamicResourceGroups } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTags: dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTags = { ... }
```


### DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags <a name="DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags.Initializer"></a>

```typescript
import { dataOciIdentityDomainsDynamicResourceGroups } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags: dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags = { ... }
```


### DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags <a name="DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags.Initializer"></a>

```typescript
import { dataOciIdentityDomainsDynamicResourceGroups } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags: dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesList <a name="DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsDynamicResourceGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference <a name="DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsDynamicResourceGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.property.adminRole">adminRole</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.property.appId">appId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.property.appName">appName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.property.legacyGroupName">legacyGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRoles">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRoles</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `adminRole`<sup>Required</sup> <a name="adminRole" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.property.adminRole"></a>

```typescript
public readonly adminRole: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `appId`<sup>Required</sup> <a name="appId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

---

##### `appName`<sup>Required</sup> <a name="appName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.property.appName"></a>

```typescript
public readonly appName: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `legacyGroupName`<sup>Required</sup> <a name="legacyGroupName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.property.legacyGroupName"></a>

```typescript
public readonly legacyGroupName: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRoles;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRoles">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRoles</a>

---


### DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsList <a name="DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsDynamicResourceGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference <a name="DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsDynamicResourceGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.property.appId">appId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.property.grantMechanism">grantMechanism</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrants">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrants</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `appId`<sup>Required</sup> <a name="appId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

---

##### `grantMechanism`<sup>Required</sup> <a name="grantMechanism" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.property.grantMechanism"></a>

```typescript
public readonly grantMechanism: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrants;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrants">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrants</a>

---


### DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByList <a name="DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsDynamicResourceGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsDynamicResourceGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedBy">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedBy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedBy">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedBy</a>

---


### DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByList <a name="DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsDynamicResourceGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsDynamicResourceGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedBy">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedBy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedBy">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsList <a name="DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsDynamicResourceGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaList <a name="DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsDynamicResourceGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference <a name="DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsDynamicResourceGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.property.created">created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.property.lastModified">lastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMeta">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMeta</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `created`<sup>Required</sup> <a name="created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.property.created"></a>

```typescript
public readonly created: string;
```

- *Type:* string

---

##### `lastModified`<sup>Required</sup> <a name="lastModified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.property.lastModified"></a>

```typescript
public readonly lastModified: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMeta;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMeta">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMeta</a>

---


### DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference <a name="DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsDynamicResourceGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.attributes">attributes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.attributeSets">attributeSets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.authorization">authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.compartmentOcid">compartmentOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.deleteInProgress">deleteInProgress</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.domainOcid">domainOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.dynamicGroupAppRoles">dynamicGroupAppRoles</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesList">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.grants">grants</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsList">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.idcsCreatedBy">idcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByList">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.idcsEndpoint">idcsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.idcsLastModifiedBy">idcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByList">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.idcsLastUpgradedInRelease">idcsLastUpgradedInRelease</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.idcsPreventedOperations">idcsPreventedOperations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.matchingRule">matchingRule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.meta">meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaList">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.schemas">schemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsList">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.tenancyOcid">tenancyOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.urnietfparamsscimschemasoracleidcsextensionOciTags">urnietfparamsscimschemasoracleidcsextensionOciTags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroups">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.attributes"></a>

```typescript
public readonly attributes: string;
```

- *Type:* string

---

##### `attributeSets`<sup>Required</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.attributeSets"></a>

```typescript
public readonly attributeSets: string[];
```

- *Type:* string[]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

---

##### `compartmentOcid`<sup>Required</sup> <a name="compartmentOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.compartmentOcid"></a>

```typescript
public readonly compartmentOcid: string;
```

- *Type:* string

---

##### `deleteInProgress`<sup>Required</sup> <a name="deleteInProgress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.deleteInProgress"></a>

```typescript
public readonly deleteInProgress: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `domainOcid`<sup>Required</sup> <a name="domainOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.domainOcid"></a>

```typescript
public readonly domainOcid: string;
```

- *Type:* string

---

##### `dynamicGroupAppRoles`<sup>Required</sup> <a name="dynamicGroupAppRoles" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.dynamicGroupAppRoles"></a>

```typescript
public readonly dynamicGroupAppRoles: DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesList">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsDynamicGroupAppRolesList</a>

---

##### `grants`<sup>Required</sup> <a name="grants" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.grants"></a>

```typescript
public readonly grants: DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsList">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsGrantsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `idcsCreatedBy`<sup>Required</sup> <a name="idcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.idcsCreatedBy"></a>

```typescript
public readonly idcsCreatedBy: DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByList">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsCreatedByList</a>

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.idcsEndpoint"></a>

```typescript
public readonly idcsEndpoint: string;
```

- *Type:* string

---

##### `idcsLastModifiedBy`<sup>Required</sup> <a name="idcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.idcsLastModifiedBy"></a>

```typescript
public readonly idcsLastModifiedBy: DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByList">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsIdcsLastModifiedByList</a>

---

##### `idcsLastUpgradedInRelease`<sup>Required</sup> <a name="idcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.idcsLastUpgradedInRelease"></a>

```typescript
public readonly idcsLastUpgradedInRelease: string;
```

- *Type:* string

---

##### `idcsPreventedOperations`<sup>Required</sup> <a name="idcsPreventedOperations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.idcsPreventedOperations"></a>

```typescript
public readonly idcsPreventedOperations: string[];
```

- *Type:* string[]

---

##### `matchingRule`<sup>Required</sup> <a name="matchingRule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.matchingRule"></a>

```typescript
public readonly matchingRule: string;
```

- *Type:* string

---

##### `meta`<sup>Required</sup> <a name="meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.meta"></a>

```typescript
public readonly meta: DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaList">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsMetaList</a>

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `resourceTypeSchemaVersion`<sup>Required</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.resourceTypeSchemaVersion"></a>

```typescript
public readonly resourceTypeSchemaVersion: string;
```

- *Type:* string

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.schemas"></a>

```typescript
public readonly schemas: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.tags"></a>

```typescript
public readonly tags: DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsList">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsList</a>

---

##### `tenancyOcid`<sup>Required</sup> <a name="tenancyOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.tenancyOcid"></a>

```typescript
public readonly tenancyOcid: string;
```

- *Type:* string

---

##### `urnietfparamsscimschemasoracleidcsextensionOciTags`<sup>Required</sup> <a name="urnietfparamsscimschemasoracleidcsextensionOciTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.urnietfparamsscimschemasoracleidcsextensionOciTags"></a>

```typescript
public readonly urnietfparamsscimschemasoracleidcsextensionOciTags: DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroups;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroups">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroups</a>

---


### DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsList <a name="DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsDynamicResourceGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference <a name="DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsDynamicResourceGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTags">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTags;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTags">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsTags</a>

---


### DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList <a name="DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsDynamicResourceGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference <a name="DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsDynamicResourceGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags</a>

---


### DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList <a name="DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsDynamicResourceGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference <a name="DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsDynamicResourceGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags</a>

---


### DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList <a name="DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsDynamicResourceGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference <a name="DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsDynamicResourceGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.property.definedTags">definedTags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.property.freeformTags">freeformTags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.property.tagSlug">tagSlug</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTags">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList</a>

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList</a>

---

##### `tagSlug`<sup>Required</sup> <a name="tagSlug" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.property.tagSlug"></a>

```typescript
public readonly tagSlug: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTags;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroups.DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTags">DataOciIdentityDomainsDynamicResourceGroupsDynamicResourceGroupsUrnietfparamsscimschemasoracleidcsextensionOciTags</a>

---



