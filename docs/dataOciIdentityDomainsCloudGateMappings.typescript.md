# `dataOciIdentityDomainsCloudGateMappings` Submodule <a name="`dataOciIdentityDomainsCloudGateMappings` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsCloudGateMappingsA <a name="DataOciIdentityDomainsCloudGateMappingsA" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gate_mappings oci_identity_domains_cloud_gate_mappings}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.Initializer"></a>

```typescript
import { dataOciIdentityDomainsCloudGateMappings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA(scope: Construct, id: string, config: DataOciIdentityDomainsCloudGateMappingsAConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsAConfig">DataOciIdentityDomainsCloudGateMappingsAConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsAConfig">DataOciIdentityDomainsCloudGateMappingsAConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.resetAttributes">resetAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.resetAttributeSets">resetAttributeSets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.resetAuthorization">resetAuthorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.resetCloudGateMappingCount">resetCloudGateMappingCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.resetCloudGateMappingFilter">resetCloudGateMappingFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.resetResourceTypeSchemaVersion">resetResourceTypeSchemaVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.resetSortBy">resetSortBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.resetSortOrder">resetSortOrder</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.resetStartIndex">resetStartIndex</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAttributes` <a name="resetAttributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.resetAttributes"></a>

```typescript
public resetAttributes(): void
```

##### `resetAttributeSets` <a name="resetAttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.resetAttributeSets"></a>

```typescript
public resetAttributeSets(): void
```

##### `resetAuthorization` <a name="resetAuthorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.resetAuthorization"></a>

```typescript
public resetAuthorization(): void
```

##### `resetCloudGateMappingCount` <a name="resetCloudGateMappingCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.resetCloudGateMappingCount"></a>

```typescript
public resetCloudGateMappingCount(): void
```

##### `resetCloudGateMappingFilter` <a name="resetCloudGateMappingFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.resetCloudGateMappingFilter"></a>

```typescript
public resetCloudGateMappingFilter(): void
```

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.resetCompartmentId"></a>

```typescript
public resetCompartmentId(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.resetId"></a>

```typescript
public resetId(): void
```

##### `resetResourceTypeSchemaVersion` <a name="resetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.resetResourceTypeSchemaVersion"></a>

```typescript
public resetResourceTypeSchemaVersion(): void
```

##### `resetSortBy` <a name="resetSortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.resetSortBy"></a>

```typescript
public resetSortBy(): void
```

##### `resetSortOrder` <a name="resetSortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.resetSortOrder"></a>

```typescript
public resetSortOrder(): void
```

##### `resetStartIndex` <a name="resetStartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.resetStartIndex"></a>

```typescript
public resetStartIndex(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsCloudGateMappingsA resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.isConstruct"></a>

```typescript
import { dataOciIdentityDomainsCloudGateMappings } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.isTerraformElement"></a>

```typescript
import { dataOciIdentityDomainsCloudGateMappings } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.isTerraformDataSource"></a>

```typescript
import { dataOciIdentityDomainsCloudGateMappings } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.generateConfigForImport"></a>

```typescript
import { dataOciIdentityDomainsCloudGateMappings } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciIdentityDomainsCloudGateMappingsA resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciIdentityDomainsCloudGateMappingsA to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciIdentityDomainsCloudGateMappingsA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gate_mappings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsCloudGateMappingsA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.cloudGateMappings">cloudGateMappings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsList">DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.itemsPerPage">itemsPerPage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.schemas">schemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.totalResults">totalResults</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.attributeSetsInput">attributeSetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.attributesInput">attributesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.authorizationInput">authorizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.cloudGateMappingCountInput">cloudGateMappingCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.cloudGateMappingFilterInput">cloudGateMappingFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.idcsEndpointInput">idcsEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.resourceTypeSchemaVersionInput">resourceTypeSchemaVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.sortByInput">sortByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.sortOrderInput">sortOrderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.startIndexInput">startIndexInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.attributes">attributes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.attributeSets">attributeSets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.authorization">authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.cloudGateMappingCount">cloudGateMappingCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.cloudGateMappingFilter">cloudGateMappingFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.idcsEndpoint">idcsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.sortBy">sortBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.sortOrder">sortOrder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.startIndex">startIndex</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `cloudGateMappings`<sup>Required</sup> <a name="cloudGateMappings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.cloudGateMappings"></a>

```typescript
public readonly cloudGateMappings: DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsList">DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsList</a>

---

##### `itemsPerPage`<sup>Required</sup> <a name="itemsPerPage" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.itemsPerPage"></a>

```typescript
public readonly itemsPerPage: number;
```

- *Type:* number

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.schemas"></a>

```typescript
public readonly schemas: string[];
```

- *Type:* string[]

---

##### `totalResults`<sup>Required</sup> <a name="totalResults" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.totalResults"></a>

```typescript
public readonly totalResults: number;
```

- *Type:* number

---

##### `attributeSetsInput`<sup>Optional</sup> <a name="attributeSetsInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.attributeSetsInput"></a>

```typescript
public readonly attributeSetsInput: string[];
```

- *Type:* string[]

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.attributesInput"></a>

```typescript
public readonly attributesInput: string;
```

- *Type:* string

---

##### `authorizationInput`<sup>Optional</sup> <a name="authorizationInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.authorizationInput"></a>

```typescript
public readonly authorizationInput: string;
```

- *Type:* string

---

##### `cloudGateMappingCountInput`<sup>Optional</sup> <a name="cloudGateMappingCountInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.cloudGateMappingCountInput"></a>

```typescript
public readonly cloudGateMappingCountInput: number;
```

- *Type:* number

---

##### `cloudGateMappingFilterInput`<sup>Optional</sup> <a name="cloudGateMappingFilterInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.cloudGateMappingFilterInput"></a>

```typescript
public readonly cloudGateMappingFilterInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `idcsEndpointInput`<sup>Optional</sup> <a name="idcsEndpointInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.idcsEndpointInput"></a>

```typescript
public readonly idcsEndpointInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `resourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="resourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.resourceTypeSchemaVersionInput"></a>

```typescript
public readonly resourceTypeSchemaVersionInput: string;
```

- *Type:* string

---

##### `sortByInput`<sup>Optional</sup> <a name="sortByInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.sortByInput"></a>

```typescript
public readonly sortByInput: string;
```

- *Type:* string

---

##### `sortOrderInput`<sup>Optional</sup> <a name="sortOrderInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.sortOrderInput"></a>

```typescript
public readonly sortOrderInput: string;
```

- *Type:* string

---

##### `startIndexInput`<sup>Optional</sup> <a name="startIndexInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.startIndexInput"></a>

```typescript
public readonly startIndexInput: number;
```

- *Type:* number

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.attributes"></a>

```typescript
public readonly attributes: string;
```

- *Type:* string

---

##### `attributeSets`<sup>Required</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.attributeSets"></a>

```typescript
public readonly attributeSets: string[];
```

- *Type:* string[]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

---

##### `cloudGateMappingCount`<sup>Required</sup> <a name="cloudGateMappingCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.cloudGateMappingCount"></a>

```typescript
public readonly cloudGateMappingCount: number;
```

- *Type:* number

---

##### `cloudGateMappingFilter`<sup>Required</sup> <a name="cloudGateMappingFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.cloudGateMappingFilter"></a>

```typescript
public readonly cloudGateMappingFilter: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.idcsEndpoint"></a>

```typescript
public readonly idcsEndpoint: string;
```

- *Type:* string

---

##### `resourceTypeSchemaVersion`<sup>Required</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.resourceTypeSchemaVersion"></a>

```typescript
public readonly resourceTypeSchemaVersion: string;
```

- *Type:* string

---

##### `sortBy`<sup>Required</sup> <a name="sortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.sortBy"></a>

```typescript
public readonly sortBy: string;
```

- *Type:* string

---

##### `sortOrder`<sup>Required</sup> <a name="sortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.sortOrder"></a>

```typescript
public readonly sortOrder: string;
```

- *Type:* string

---

##### `startIndex`<sup>Required</sup> <a name="startIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.startIndex"></a>

```typescript
public readonly startIndex: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsCloudGateMappingsAConfig <a name="DataOciIdentityDomainsCloudGateMappingsAConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsAConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsAConfig.Initializer"></a>

```typescript
import { dataOciIdentityDomainsCloudGateMappings } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsCloudGateMappingsAConfig: dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsAConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsAConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsAConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsAConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsAConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsAConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsAConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsAConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsAConfig.property.idcsEndpoint">idcsEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gate_mappings#idcs_endpoint DataOciIdentityDomainsCloudGateMappingsA#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsAConfig.property.attributes">attributes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gate_mappings#attributes DataOciIdentityDomainsCloudGateMappingsA#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsAConfig.property.attributeSets">attributeSets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gate_mappings#attribute_sets DataOciIdentityDomainsCloudGateMappingsA#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsAConfig.property.authorization">authorization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gate_mappings#authorization DataOciIdentityDomainsCloudGateMappingsA#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsAConfig.property.cloudGateMappingCount">cloudGateMappingCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gate_mappings#cloud_gate_mapping_count DataOciIdentityDomainsCloudGateMappingsA#cloud_gate_mapping_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsAConfig.property.cloudGateMappingFilter">cloudGateMappingFilter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gate_mappings#cloud_gate_mapping_filter DataOciIdentityDomainsCloudGateMappingsA#cloud_gate_mapping_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsAConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gate_mappings#compartment_id DataOciIdentityDomainsCloudGateMappingsA#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsAConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gate_mappings#id DataOciIdentityDomainsCloudGateMappingsA#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsAConfig.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gate_mappings#resource_type_schema_version DataOciIdentityDomainsCloudGateMappingsA#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsAConfig.property.sortBy">sortBy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gate_mappings#sort_by DataOciIdentityDomainsCloudGateMappingsA#sort_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsAConfig.property.sortOrder">sortOrder</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gate_mappings#sort_order DataOciIdentityDomainsCloudGateMappingsA#sort_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsAConfig.property.startIndex">startIndex</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gate_mappings#start_index DataOciIdentityDomainsCloudGateMappingsA#start_index}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsAConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsAConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsAConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsAConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsAConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsAConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsAConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsAConfig.property.idcsEndpoint"></a>

```typescript
public readonly idcsEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gate_mappings#idcs_endpoint DataOciIdentityDomainsCloudGateMappingsA#idcs_endpoint}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsAConfig.property.attributes"></a>

```typescript
public readonly attributes: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gate_mappings#attributes DataOciIdentityDomainsCloudGateMappingsA#attributes}.

---

##### `attributeSets`<sup>Optional</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsAConfig.property.attributeSets"></a>

```typescript
public readonly attributeSets: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gate_mappings#attribute_sets DataOciIdentityDomainsCloudGateMappingsA#attribute_sets}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsAConfig.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gate_mappings#authorization DataOciIdentityDomainsCloudGateMappingsA#authorization}.

---

##### `cloudGateMappingCount`<sup>Optional</sup> <a name="cloudGateMappingCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsAConfig.property.cloudGateMappingCount"></a>

```typescript
public readonly cloudGateMappingCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gate_mappings#cloud_gate_mapping_count DataOciIdentityDomainsCloudGateMappingsA#cloud_gate_mapping_count}.

---

##### `cloudGateMappingFilter`<sup>Optional</sup> <a name="cloudGateMappingFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsAConfig.property.cloudGateMappingFilter"></a>

```typescript
public readonly cloudGateMappingFilter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gate_mappings#cloud_gate_mapping_filter DataOciIdentityDomainsCloudGateMappingsA#cloud_gate_mapping_filter}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsAConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gate_mappings#compartment_id DataOciIdentityDomainsCloudGateMappingsA#compartment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsAConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gate_mappings#id DataOciIdentityDomainsCloudGateMappingsA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resourceTypeSchemaVersion`<sup>Optional</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsAConfig.property.resourceTypeSchemaVersion"></a>

```typescript
public readonly resourceTypeSchemaVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gate_mappings#resource_type_schema_version DataOciIdentityDomainsCloudGateMappingsA#resource_type_schema_version}.

---

##### `sortBy`<sup>Optional</sup> <a name="sortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsAConfig.property.sortBy"></a>

```typescript
public readonly sortBy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gate_mappings#sort_by DataOciIdentityDomainsCloudGateMappingsA#sort_by}.

---

##### `sortOrder`<sup>Optional</sup> <a name="sortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsAConfig.property.sortOrder"></a>

```typescript
public readonly sortOrder: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gate_mappings#sort_order DataOciIdentityDomainsCloudGateMappingsA#sort_order}.

---

##### `startIndex`<sup>Optional</sup> <a name="startIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsAConfig.property.startIndex"></a>

```typescript
public readonly startIndex: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gate_mappings#start_index DataOciIdentityDomainsCloudGateMappingsA#start_index}.

---

### DataOciIdentityDomainsCloudGateMappingsCloudGateMappings <a name="DataOciIdentityDomainsCloudGateMappingsCloudGateMappings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappings.Initializer"></a>

```typescript
import { dataOciIdentityDomainsCloudGateMappings } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsCloudGateMappingsCloudGateMappings: dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappings = { ... }
```


### DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGate <a name="DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGate" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGate"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGate.Initializer"></a>

```typescript
import { dataOciIdentityDomainsCloudGateMappings } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGate: dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGate = { ... }
```


### DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayApp <a name="DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayApp" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayApp"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayApp.Initializer"></a>

```typescript
import { dataOciIdentityDomainsCloudGateMappings } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayApp: dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayApp = { ... }
```


### DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedBy <a name="DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedBy.Initializer"></a>

```typescript
import { dataOciIdentityDomainsCloudGateMappings } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedBy: dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedBy = { ... }
```


### DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedBy <a name="DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedBy.Initializer"></a>

```typescript
import { dataOciIdentityDomainsCloudGateMappings } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedBy: dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedBy = { ... }
```


### DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMeta <a name="DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMeta.Initializer"></a>

```typescript
import { dataOciIdentityDomainsCloudGateMappings } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMeta: dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMeta = { ... }
```


### DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServer <a name="DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServer"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServer.Initializer"></a>

```typescript
import { dataOciIdentityDomainsCloudGateMappings } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServer: dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServer = { ... }
```


### DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTags <a name="DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTags.Initializer"></a>

```typescript
import { dataOciIdentityDomainsCloudGateMappings } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTags: dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTags = { ... }
```


### DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroup <a name="DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroup" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroup"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroup.Initializer"></a>

```typescript
import { dataOciIdentityDomainsCloudGateMappings } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroup: dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroup = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateList <a name="DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsCloudGateMappings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference <a name="DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsCloudGateMappings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGate">DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGate;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGate">DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGate</a>

---


### DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppList <a name="DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsCloudGateMappings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference <a name="DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsCloudGateMappings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayApp">DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayApp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayApp;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayApp">DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayApp</a>

---


### DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByList <a name="DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsCloudGateMappings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsCloudGateMappings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedBy">DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedBy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedBy">DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedBy</a>

---


### DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByList <a name="DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsCloudGateMappings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsCloudGateMappings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedBy">DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedBy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedBy">DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsList <a name="DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsCloudGateMappings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaList <a name="DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsCloudGateMappings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference <a name="DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsCloudGateMappings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.property.created">created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.property.lastModified">lastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMeta">DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMeta</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `created`<sup>Required</sup> <a name="created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.property.created"></a>

```typescript
public readonly created: string;
```

- *Type:* string

---

##### `lastModified`<sup>Required</sup> <a name="lastModified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.property.lastModified"></a>

```typescript
public readonly lastModified: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMeta;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMeta">DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMeta</a>

---


### DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference <a name="DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsCloudGateMappings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.attributes">attributes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.attributeSets">attributeSets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.authorization">authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.cloudGate">cloudGate</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateList">DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.compartmentOcid">compartmentOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.deleteInProgress">deleteInProgress</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.domainOcid">domainOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.gatewayApp">gatewayApp</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppList">DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.idcsCreatedBy">idcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByList">DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.idcsEndpoint">idcsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.idcsLastModifiedBy">idcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByList">DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.idcsLastUpgradedInRelease">idcsLastUpgradedInRelease</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.idcsPreventedOperations">idcsPreventedOperations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.isOpcService">isOpcService</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.meta">meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaList">DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.nginxSettings">nginxSettings</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.policyName">policyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.proxyPass">proxyPass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.resourcePrefix">resourcePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.schemas">schemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.server">server</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerList">DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsList">DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.tenancyOcid">tenancyOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.upstreamServerGroup">upstreamServerGroup</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupList">DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappings">DataOciIdentityDomainsCloudGateMappingsCloudGateMappings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.attributes"></a>

```typescript
public readonly attributes: string;
```

- *Type:* string

---

##### `attributeSets`<sup>Required</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.attributeSets"></a>

```typescript
public readonly attributeSets: string[];
```

- *Type:* string[]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

---

##### `cloudGate`<sup>Required</sup> <a name="cloudGate" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.cloudGate"></a>

```typescript
public readonly cloudGate: DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateList">DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateList</a>

---

##### `compartmentOcid`<sup>Required</sup> <a name="compartmentOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.compartmentOcid"></a>

```typescript
public readonly compartmentOcid: string;
```

- *Type:* string

---

##### `deleteInProgress`<sup>Required</sup> <a name="deleteInProgress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.deleteInProgress"></a>

```typescript
public readonly deleteInProgress: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `domainOcid`<sup>Required</sup> <a name="domainOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.domainOcid"></a>

```typescript
public readonly domainOcid: string;
```

- *Type:* string

---

##### `gatewayApp`<sup>Required</sup> <a name="gatewayApp" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.gatewayApp"></a>

```typescript
public readonly gatewayApp: DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppList">DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `idcsCreatedBy`<sup>Required</sup> <a name="idcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.idcsCreatedBy"></a>

```typescript
public readonly idcsCreatedBy: DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByList">DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByList</a>

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.idcsEndpoint"></a>

```typescript
public readonly idcsEndpoint: string;
```

- *Type:* string

---

##### `idcsLastModifiedBy`<sup>Required</sup> <a name="idcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.idcsLastModifiedBy"></a>

```typescript
public readonly idcsLastModifiedBy: DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByList">DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByList</a>

---

##### `idcsLastUpgradedInRelease`<sup>Required</sup> <a name="idcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.idcsLastUpgradedInRelease"></a>

```typescript
public readonly idcsLastUpgradedInRelease: string;
```

- *Type:* string

---

##### `idcsPreventedOperations`<sup>Required</sup> <a name="idcsPreventedOperations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.idcsPreventedOperations"></a>

```typescript
public readonly idcsPreventedOperations: string[];
```

- *Type:* string[]

---

##### `isOpcService`<sup>Required</sup> <a name="isOpcService" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.isOpcService"></a>

```typescript
public readonly isOpcService: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `meta`<sup>Required</sup> <a name="meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.meta"></a>

```typescript
public readonly meta: DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaList">DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaList</a>

---

##### `nginxSettings`<sup>Required</sup> <a name="nginxSettings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.nginxSettings"></a>

```typescript
public readonly nginxSettings: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.policyName"></a>

```typescript
public readonly policyName: string;
```

- *Type:* string

---

##### `proxyPass`<sup>Required</sup> <a name="proxyPass" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.proxyPass"></a>

```typescript
public readonly proxyPass: string;
```

- *Type:* string

---

##### `resourcePrefix`<sup>Required</sup> <a name="resourcePrefix" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.resourcePrefix"></a>

```typescript
public readonly resourcePrefix: string;
```

- *Type:* string

---

##### `resourceTypeSchemaVersion`<sup>Required</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.resourceTypeSchemaVersion"></a>

```typescript
public readonly resourceTypeSchemaVersion: string;
```

- *Type:* string

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.schemas"></a>

```typescript
public readonly schemas: string[];
```

- *Type:* string[]

---

##### `server`<sup>Required</sup> <a name="server" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.server"></a>

```typescript
public readonly server: DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerList">DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.tags"></a>

```typescript
public readonly tags: DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsList">DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsList</a>

---

##### `tenancyOcid`<sup>Required</sup> <a name="tenancyOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.tenancyOcid"></a>

```typescript
public readonly tenancyOcid: string;
```

- *Type:* string

---

##### `upstreamServerGroup`<sup>Required</sup> <a name="upstreamServerGroup" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.upstreamServerGroup"></a>

```typescript
public readonly upstreamServerGroup: DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupList">DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsCloudGateMappingsCloudGateMappings;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappings">DataOciIdentityDomainsCloudGateMappingsCloudGateMappings</a>

---


### DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerList <a name="DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsCloudGateMappings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference <a name="DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsCloudGateMappings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServer">DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServer;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServer">DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServer</a>

---


### DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsList <a name="DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsCloudGateMappings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference <a name="DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsCloudGateMappings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTags">DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTags;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTags">DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTags</a>

---


### DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupList <a name="DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsCloudGateMappings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference <a name="DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsCloudGateMappings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.property.ssl">ssl</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroup">DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `ssl`<sup>Required</sup> <a name="ssl" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.property.ssl"></a>

```typescript
public readonly ssl: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroup;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroup">DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroup</a>

---



