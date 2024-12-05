# `dataOciIdentityDomainsIdentityPropagationTrusts` Submodule <a name="`dataOciIdentityDomainsIdentityPropagationTrusts` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsIdentityPropagationTrusts <a name="DataOciIdentityDomainsIdentityPropagationTrusts" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_propagation_trusts oci_identity_domains_identity_propagation_trusts}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.Initializer"></a>

```typescript
import { dataOciIdentityDomainsIdentityPropagationTrusts } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts(scope: Construct, id: string, config: DataOciIdentityDomainsIdentityPropagationTrustsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsConfig">DataOciIdentityDomainsIdentityPropagationTrustsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsConfig">DataOciIdentityDomainsIdentityPropagationTrustsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.resetAttributes">resetAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.resetAttributeSets">resetAttributeSets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.resetAuthorization">resetAuthorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.resetIdentityPropagationTrustCount">resetIdentityPropagationTrustCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.resetIdentityPropagationTrustFilter">resetIdentityPropagationTrustFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.resetResourceTypeSchemaVersion">resetResourceTypeSchemaVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.resetSortBy">resetSortBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.resetSortOrder">resetSortOrder</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.resetStartIndex">resetStartIndex</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAttributes` <a name="resetAttributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.resetAttributes"></a>

```typescript
public resetAttributes(): void
```

##### `resetAttributeSets` <a name="resetAttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.resetAttributeSets"></a>

```typescript
public resetAttributeSets(): void
```

##### `resetAuthorization` <a name="resetAuthorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.resetAuthorization"></a>

```typescript
public resetAuthorization(): void
```

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.resetCompartmentId"></a>

```typescript
public resetCompartmentId(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIdentityPropagationTrustCount` <a name="resetIdentityPropagationTrustCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.resetIdentityPropagationTrustCount"></a>

```typescript
public resetIdentityPropagationTrustCount(): void
```

##### `resetIdentityPropagationTrustFilter` <a name="resetIdentityPropagationTrustFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.resetIdentityPropagationTrustFilter"></a>

```typescript
public resetIdentityPropagationTrustFilter(): void
```

##### `resetResourceTypeSchemaVersion` <a name="resetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.resetResourceTypeSchemaVersion"></a>

```typescript
public resetResourceTypeSchemaVersion(): void
```

##### `resetSortBy` <a name="resetSortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.resetSortBy"></a>

```typescript
public resetSortBy(): void
```

##### `resetSortOrder` <a name="resetSortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.resetSortOrder"></a>

```typescript
public resetSortOrder(): void
```

##### `resetStartIndex` <a name="resetStartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.resetStartIndex"></a>

```typescript
public resetStartIndex(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsIdentityPropagationTrusts resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.isConstruct"></a>

```typescript
import { dataOciIdentityDomainsIdentityPropagationTrusts } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.isTerraformElement"></a>

```typescript
import { dataOciIdentityDomainsIdentityPropagationTrusts } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.isTerraformDataSource"></a>

```typescript
import { dataOciIdentityDomainsIdentityPropagationTrusts } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.generateConfigForImport"></a>

```typescript
import { dataOciIdentityDomainsIdentityPropagationTrusts } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciIdentityDomainsIdentityPropagationTrusts resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciIdentityDomainsIdentityPropagationTrusts to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciIdentityDomainsIdentityPropagationTrusts that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_propagation_trusts#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsIdentityPropagationTrusts to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.identityPropagationTrusts">identityPropagationTrusts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsList">DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.itemsPerPage">itemsPerPage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.schemas">schemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.totalResults">totalResults</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.attributeSetsInput">attributeSetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.attributesInput">attributesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.authorizationInput">authorizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.idcsEndpointInput">idcsEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.identityPropagationTrustCountInput">identityPropagationTrustCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.identityPropagationTrustFilterInput">identityPropagationTrustFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.resourceTypeSchemaVersionInput">resourceTypeSchemaVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.sortByInput">sortByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.sortOrderInput">sortOrderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.startIndexInput">startIndexInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.attributes">attributes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.attributeSets">attributeSets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.authorization">authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.idcsEndpoint">idcsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.identityPropagationTrustCount">identityPropagationTrustCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.identityPropagationTrustFilter">identityPropagationTrustFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.sortBy">sortBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.sortOrder">sortOrder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.startIndex">startIndex</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `identityPropagationTrusts`<sup>Required</sup> <a name="identityPropagationTrusts" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.identityPropagationTrusts"></a>

```typescript
public readonly identityPropagationTrusts: DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsList">DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsList</a>

---

##### `itemsPerPage`<sup>Required</sup> <a name="itemsPerPage" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.itemsPerPage"></a>

```typescript
public readonly itemsPerPage: number;
```

- *Type:* number

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.schemas"></a>

```typescript
public readonly schemas: string[];
```

- *Type:* string[]

---

##### `totalResults`<sup>Required</sup> <a name="totalResults" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.totalResults"></a>

```typescript
public readonly totalResults: number;
```

- *Type:* number

---

##### `attributeSetsInput`<sup>Optional</sup> <a name="attributeSetsInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.attributeSetsInput"></a>

```typescript
public readonly attributeSetsInput: string[];
```

- *Type:* string[]

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.attributesInput"></a>

```typescript
public readonly attributesInput: string;
```

- *Type:* string

---

##### `authorizationInput`<sup>Optional</sup> <a name="authorizationInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.authorizationInput"></a>

```typescript
public readonly authorizationInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `idcsEndpointInput`<sup>Optional</sup> <a name="idcsEndpointInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.idcsEndpointInput"></a>

```typescript
public readonly idcsEndpointInput: string;
```

- *Type:* string

---

##### `identityPropagationTrustCountInput`<sup>Optional</sup> <a name="identityPropagationTrustCountInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.identityPropagationTrustCountInput"></a>

```typescript
public readonly identityPropagationTrustCountInput: number;
```

- *Type:* number

---

##### `identityPropagationTrustFilterInput`<sup>Optional</sup> <a name="identityPropagationTrustFilterInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.identityPropagationTrustFilterInput"></a>

```typescript
public readonly identityPropagationTrustFilterInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `resourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="resourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.resourceTypeSchemaVersionInput"></a>

```typescript
public readonly resourceTypeSchemaVersionInput: string;
```

- *Type:* string

---

##### `sortByInput`<sup>Optional</sup> <a name="sortByInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.sortByInput"></a>

```typescript
public readonly sortByInput: string;
```

- *Type:* string

---

##### `sortOrderInput`<sup>Optional</sup> <a name="sortOrderInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.sortOrderInput"></a>

```typescript
public readonly sortOrderInput: string;
```

- *Type:* string

---

##### `startIndexInput`<sup>Optional</sup> <a name="startIndexInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.startIndexInput"></a>

```typescript
public readonly startIndexInput: number;
```

- *Type:* number

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.attributes"></a>

```typescript
public readonly attributes: string;
```

- *Type:* string

---

##### `attributeSets`<sup>Required</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.attributeSets"></a>

```typescript
public readonly attributeSets: string[];
```

- *Type:* string[]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.idcsEndpoint"></a>

```typescript
public readonly idcsEndpoint: string;
```

- *Type:* string

---

##### `identityPropagationTrustCount`<sup>Required</sup> <a name="identityPropagationTrustCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.identityPropagationTrustCount"></a>

```typescript
public readonly identityPropagationTrustCount: number;
```

- *Type:* number

---

##### `identityPropagationTrustFilter`<sup>Required</sup> <a name="identityPropagationTrustFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.identityPropagationTrustFilter"></a>

```typescript
public readonly identityPropagationTrustFilter: string;
```

- *Type:* string

---

##### `resourceTypeSchemaVersion`<sup>Required</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.resourceTypeSchemaVersion"></a>

```typescript
public readonly resourceTypeSchemaVersion: string;
```

- *Type:* string

---

##### `sortBy`<sup>Required</sup> <a name="sortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.sortBy"></a>

```typescript
public readonly sortBy: string;
```

- *Type:* string

---

##### `sortOrder`<sup>Required</sup> <a name="sortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.sortOrder"></a>

```typescript
public readonly sortOrder: string;
```

- *Type:* string

---

##### `startIndex`<sup>Required</sup> <a name="startIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.startIndex"></a>

```typescript
public readonly startIndex: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrusts.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsIdentityPropagationTrustsConfig <a name="DataOciIdentityDomainsIdentityPropagationTrustsConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsConfig.Initializer"></a>

```typescript
import { dataOciIdentityDomainsIdentityPropagationTrusts } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsIdentityPropagationTrustsConfig: dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsConfig.property.idcsEndpoint">idcsEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_propagation_trusts#idcs_endpoint DataOciIdentityDomainsIdentityPropagationTrusts#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsConfig.property.attributes">attributes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_propagation_trusts#attributes DataOciIdentityDomainsIdentityPropagationTrusts#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsConfig.property.attributeSets">attributeSets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_propagation_trusts#attribute_sets DataOciIdentityDomainsIdentityPropagationTrusts#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsConfig.property.authorization">authorization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_propagation_trusts#authorization DataOciIdentityDomainsIdentityPropagationTrusts#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_propagation_trusts#compartment_id DataOciIdentityDomainsIdentityPropagationTrusts#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_propagation_trusts#id DataOciIdentityDomainsIdentityPropagationTrusts#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsConfig.property.identityPropagationTrustCount">identityPropagationTrustCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_propagation_trusts#identity_propagation_trust_count DataOciIdentityDomainsIdentityPropagationTrusts#identity_propagation_trust_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsConfig.property.identityPropagationTrustFilter">identityPropagationTrustFilter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_propagation_trusts#identity_propagation_trust_filter DataOciIdentityDomainsIdentityPropagationTrusts#identity_propagation_trust_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsConfig.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_propagation_trusts#resource_type_schema_version DataOciIdentityDomainsIdentityPropagationTrusts#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsConfig.property.sortBy">sortBy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_propagation_trusts#sort_by DataOciIdentityDomainsIdentityPropagationTrusts#sort_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsConfig.property.sortOrder">sortOrder</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_propagation_trusts#sort_order DataOciIdentityDomainsIdentityPropagationTrusts#sort_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsConfig.property.startIndex">startIndex</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_propagation_trusts#start_index DataOciIdentityDomainsIdentityPropagationTrusts#start_index}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsConfig.property.idcsEndpoint"></a>

```typescript
public readonly idcsEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_propagation_trusts#idcs_endpoint DataOciIdentityDomainsIdentityPropagationTrusts#idcs_endpoint}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsConfig.property.attributes"></a>

```typescript
public readonly attributes: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_propagation_trusts#attributes DataOciIdentityDomainsIdentityPropagationTrusts#attributes}.

---

##### `attributeSets`<sup>Optional</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsConfig.property.attributeSets"></a>

```typescript
public readonly attributeSets: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_propagation_trusts#attribute_sets DataOciIdentityDomainsIdentityPropagationTrusts#attribute_sets}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsConfig.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_propagation_trusts#authorization DataOciIdentityDomainsIdentityPropagationTrusts#authorization}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_propagation_trusts#compartment_id DataOciIdentityDomainsIdentityPropagationTrusts#compartment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_propagation_trusts#id DataOciIdentityDomainsIdentityPropagationTrusts#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identityPropagationTrustCount`<sup>Optional</sup> <a name="identityPropagationTrustCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsConfig.property.identityPropagationTrustCount"></a>

```typescript
public readonly identityPropagationTrustCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_propagation_trusts#identity_propagation_trust_count DataOciIdentityDomainsIdentityPropagationTrusts#identity_propagation_trust_count}.

---

##### `identityPropagationTrustFilter`<sup>Optional</sup> <a name="identityPropagationTrustFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsConfig.property.identityPropagationTrustFilter"></a>

```typescript
public readonly identityPropagationTrustFilter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_propagation_trusts#identity_propagation_trust_filter DataOciIdentityDomainsIdentityPropagationTrusts#identity_propagation_trust_filter}.

---

##### `resourceTypeSchemaVersion`<sup>Optional</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsConfig.property.resourceTypeSchemaVersion"></a>

```typescript
public readonly resourceTypeSchemaVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_propagation_trusts#resource_type_schema_version DataOciIdentityDomainsIdentityPropagationTrusts#resource_type_schema_version}.

---

##### `sortBy`<sup>Optional</sup> <a name="sortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsConfig.property.sortBy"></a>

```typescript
public readonly sortBy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_propagation_trusts#sort_by DataOciIdentityDomainsIdentityPropagationTrusts#sort_by}.

---

##### `sortOrder`<sup>Optional</sup> <a name="sortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsConfig.property.sortOrder"></a>

```typescript
public readonly sortOrder: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_propagation_trusts#sort_order DataOciIdentityDomainsIdentityPropagationTrusts#sort_order}.

---

##### `startIndex`<sup>Optional</sup> <a name="startIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsConfig.property.startIndex"></a>

```typescript
public readonly startIndex: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_propagation_trusts#start_index DataOciIdentityDomainsIdentityPropagationTrusts#start_index}.

---

### DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrusts <a name="DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrusts" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrusts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrusts.Initializer"></a>

```typescript
import { dataOciIdentityDomainsIdentityPropagationTrusts } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrusts: dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrusts = { ... }
```


### DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedBy <a name="DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedBy.Initializer"></a>

```typescript
import { dataOciIdentityDomainsIdentityPropagationTrusts } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedBy: dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedBy = { ... }
```


### DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedBy <a name="DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedBy.Initializer"></a>

```typescript
import { dataOciIdentityDomainsIdentityPropagationTrusts } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedBy: dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedBy = { ... }
```


### DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsers <a name="DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsers.Initializer"></a>

```typescript
import { dataOciIdentityDomainsIdentityPropagationTrusts } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsers: dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsers = { ... }
```


### DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytab <a name="DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytab" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytab"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytab.Initializer"></a>

```typescript
import { dataOciIdentityDomainsIdentityPropagationTrusts } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytab: dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytab = { ... }
```


### DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMeta <a name="DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMeta.Initializer"></a>

```typescript
import { dataOciIdentityDomainsIdentityPropagationTrusts } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMeta: dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMeta = { ... }
```


### DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTags <a name="DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTags.Initializer"></a>

```typescript
import { dataOciIdentityDomainsIdentityPropagationTrusts } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTags: dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByList <a name="DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsIdentityPropagationTrusts } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsIdentityPropagationTrusts } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedBy">DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedBy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedBy">DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedBy</a>

---


### DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByList <a name="DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsIdentityPropagationTrusts } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsIdentityPropagationTrusts } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedBy">DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedBy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedBy">DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersList <a name="DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsIdentityPropagationTrusts } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference <a name="DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsIdentityPropagationTrusts } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.property.rule">rule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsers">DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `rule`<sup>Required</sup> <a name="rule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.property.rule"></a>

```typescript
public readonly rule: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsers;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsers">DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsers</a>

---


### DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabList <a name="DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsIdentityPropagationTrusts } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference <a name="DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsIdentityPropagationTrusts } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference.property.secretOcid">secretOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference.property.secretVersion">secretVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytab">DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytab</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `secretOcid`<sup>Required</sup> <a name="secretOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference.property.secretOcid"></a>

```typescript
public readonly secretOcid: string;
```

- *Type:* string

---

##### `secretVersion`<sup>Required</sup> <a name="secretVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference.property.secretVersion"></a>

```typescript
public readonly secretVersion: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytab;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytab">DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytab</a>

---


### DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsList <a name="DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsIdentityPropagationTrusts } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaList <a name="DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsIdentityPropagationTrusts } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference <a name="DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsIdentityPropagationTrusts } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.property.created">created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.property.lastModified">lastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMeta">DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMeta</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `created`<sup>Required</sup> <a name="created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.property.created"></a>

```typescript
public readonly created: string;
```

- *Type:* string

---

##### `lastModified`<sup>Required</sup> <a name="lastModified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.property.lastModified"></a>

```typescript
public readonly lastModified: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMeta;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMeta">DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMeta</a>

---


### DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference <a name="DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsIdentityPropagationTrusts } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.active">active</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.allowImpersonation">allowImpersonation</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.attributes">attributes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.attributeSets">attributeSets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.authorization">authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.clientClaimName">clientClaimName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.clientClaimValues">clientClaimValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.clockSkewSeconds">clockSkewSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.compartmentOcid">compartmentOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.deleteInProgress">deleteInProgress</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.domainOcid">domainOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.idcsCreatedBy">idcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByList">DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.idcsEndpoint">idcsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.idcsLastModifiedBy">idcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByList">DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.idcsLastUpgradedInRelease">idcsLastUpgradedInRelease</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.idcsPreventedOperations">idcsPreventedOperations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.impersonationServiceUsers">impersonationServiceUsers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersList">DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.issuer">issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.keytab">keytab</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabList">DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.meta">meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaList">DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.oauthClients">oauthClients</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.publicCertificate">publicCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.publicKeyEndpoint">publicKeyEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.schemas">schemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.subjectClaimName">subjectClaimName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.subjectMappingAttribute">subjectMappingAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.subjectType">subjectType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsList">DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.tenancyOcid">tenancyOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrusts">DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrusts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `active`<sup>Required</sup> <a name="active" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.active"></a>

```typescript
public readonly active: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `allowImpersonation`<sup>Required</sup> <a name="allowImpersonation" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.allowImpersonation"></a>

```typescript
public readonly allowImpersonation: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.attributes"></a>

```typescript
public readonly attributes: string;
```

- *Type:* string

---

##### `attributeSets`<sup>Required</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.attributeSets"></a>

```typescript
public readonly attributeSets: string[];
```

- *Type:* string[]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

---

##### `clientClaimName`<sup>Required</sup> <a name="clientClaimName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.clientClaimName"></a>

```typescript
public readonly clientClaimName: string;
```

- *Type:* string

---

##### `clientClaimValues`<sup>Required</sup> <a name="clientClaimValues" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.clientClaimValues"></a>

```typescript
public readonly clientClaimValues: string[];
```

- *Type:* string[]

---

##### `clockSkewSeconds`<sup>Required</sup> <a name="clockSkewSeconds" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.clockSkewSeconds"></a>

```typescript
public readonly clockSkewSeconds: number;
```

- *Type:* number

---

##### `compartmentOcid`<sup>Required</sup> <a name="compartmentOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.compartmentOcid"></a>

```typescript
public readonly compartmentOcid: string;
```

- *Type:* string

---

##### `deleteInProgress`<sup>Required</sup> <a name="deleteInProgress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.deleteInProgress"></a>

```typescript
public readonly deleteInProgress: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `domainOcid`<sup>Required</sup> <a name="domainOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.domainOcid"></a>

```typescript
public readonly domainOcid: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `idcsCreatedBy`<sup>Required</sup> <a name="idcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.idcsCreatedBy"></a>

```typescript
public readonly idcsCreatedBy: DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByList">DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsCreatedByList</a>

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.idcsEndpoint"></a>

```typescript
public readonly idcsEndpoint: string;
```

- *Type:* string

---

##### `idcsLastModifiedBy`<sup>Required</sup> <a name="idcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.idcsLastModifiedBy"></a>

```typescript
public readonly idcsLastModifiedBy: DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByList">DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsIdcsLastModifiedByList</a>

---

##### `idcsLastUpgradedInRelease`<sup>Required</sup> <a name="idcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.idcsLastUpgradedInRelease"></a>

```typescript
public readonly idcsLastUpgradedInRelease: string;
```

- *Type:* string

---

##### `idcsPreventedOperations`<sup>Required</sup> <a name="idcsPreventedOperations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.idcsPreventedOperations"></a>

```typescript
public readonly idcsPreventedOperations: string[];
```

- *Type:* string[]

---

##### `impersonationServiceUsers`<sup>Required</sup> <a name="impersonationServiceUsers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.impersonationServiceUsers"></a>

```typescript
public readonly impersonationServiceUsers: DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersList">DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsImpersonationServiceUsersList</a>

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

---

##### `keytab`<sup>Required</sup> <a name="keytab" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.keytab"></a>

```typescript
public readonly keytab: DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabList">DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsKeytabList</a>

---

##### `meta`<sup>Required</sup> <a name="meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.meta"></a>

```typescript
public readonly meta: DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaList">DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsMetaList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `oauthClients`<sup>Required</sup> <a name="oauthClients" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.oauthClients"></a>

```typescript
public readonly oauthClients: string[];
```

- *Type:* string[]

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `publicCertificate`<sup>Required</sup> <a name="publicCertificate" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.publicCertificate"></a>

```typescript
public readonly publicCertificate: string;
```

- *Type:* string

---

##### `publicKeyEndpoint`<sup>Required</sup> <a name="publicKeyEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.publicKeyEndpoint"></a>

```typescript
public readonly publicKeyEndpoint: string;
```

- *Type:* string

---

##### `resourceTypeSchemaVersion`<sup>Required</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.resourceTypeSchemaVersion"></a>

```typescript
public readonly resourceTypeSchemaVersion: string;
```

- *Type:* string

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.schemas"></a>

```typescript
public readonly schemas: string[];
```

- *Type:* string[]

---

##### `subjectClaimName`<sup>Required</sup> <a name="subjectClaimName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.subjectClaimName"></a>

```typescript
public readonly subjectClaimName: string;
```

- *Type:* string

---

##### `subjectMappingAttribute`<sup>Required</sup> <a name="subjectMappingAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.subjectMappingAttribute"></a>

```typescript
public readonly subjectMappingAttribute: string;
```

- *Type:* string

---

##### `subjectType`<sup>Required</sup> <a name="subjectType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.subjectType"></a>

```typescript
public readonly subjectType: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.tags"></a>

```typescript
public readonly tags: DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsList">DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsList</a>

---

##### `tenancyOcid`<sup>Required</sup> <a name="tenancyOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.tenancyOcid"></a>

```typescript
public readonly tenancyOcid: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrusts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrusts">DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrusts</a>

---


### DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsList <a name="DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsIdentityPropagationTrusts } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference <a name="DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsIdentityPropagationTrusts } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTags">DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTags;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrusts.DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTags">DataOciIdentityDomainsIdentityPropagationTrustsIdentityPropagationTrustsTags</a>

---



